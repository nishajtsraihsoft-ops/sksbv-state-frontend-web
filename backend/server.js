// simple Node/Express backend for admin login/example
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const db = new sqlite3.Database(path.join(__dirname, 'db.sqlite'));
const SECRET = process.env.JWT_SECRET || 'changeme';

app.use(cors());
app.use(express.json());
app.use('/media', express.static(path.join(__dirname, 'media')));

const storageLeaders = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'media/leaders/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const uploadLeaders = multer({ storage: storageLeaders });

const storageCirculars = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'media/circulars/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const uploadCirculars = multer({ storage: storageCirculars });

const storageGallery = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'media/gallery/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const uploadGallery = multer({ storage: storageGallery });

// initialize tables and default admin
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password_hash TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS leaders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    designation TEXT,
    image TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS working_committee (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    designation TEXT,
    image TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS district_leaders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    designation TEXT,
    image TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS circulars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    date TEXT,
    file TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    title TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS notifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    message TEXT,
    date TEXT,
    link TEXT
  )`);

  db.get('SELECT COUNT(*) as count FROM admins', (err, row) => {
    if (err) throw err;
    if (row.count === 0) {
      const pw = 'admin123'; // change immediately in production
      bcrypt.hash(pw, 10, (err, hash) => {
        if (err) throw err;
        db.run('INSERT INTO admins (username, password_hash) VALUES (?, ?)', ['admin', hash]);
        console.log('created default admin user -> admin/' + pw);
      });
    }
  });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);
  const token = authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') return res.sendStatus(403);
  next();
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing credentials' });

  db.get('SELECT * FROM admins WHERE username = ?', username, (err, row) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    if (!row) return res.status(401).json({ error: 'Invalid username or password' });

    bcrypt.compare(password, row.password_hash, (err, result) => {
      if (err) return res.status(500).json({ error: 'Error checking password' });
      if (!result) return res.status(401).json({ error: 'Invalid username or password' });

      const user = { id: row.id, username: row.username, role: 'admin' };
      const token = jwt.sign(user, SECRET, { expiresIn: '1h' });
      res.json({ token, user });
    });
  });
});

app.get('/api/admin/data', authenticateToken, requireAdmin, (req, res) => {
  res.json({ message: 'You are viewing protected data', user: req.user });
});

// sample CRUD for "items" table to demonstrate connect/edit
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT
  )`);
});

app.get('/api/admin/items', authenticateToken, requireAdmin, (req, res) => {
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.post('/api/admin/items', authenticateToken, requireAdmin, (req, res) => {
  const { title, content } = req.body;
  db.run('INSERT INTO items (title, content) VALUES (?, ?)', [title, content], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ id: this.lastID, title, content });
  });
});

app.put('/api/admin/items/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.run('UPDATE items SET title = ?, content = ? WHERE id = ?', [title, content, id], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ changed: this.changes });
  });
});

app.delete('/api/admin/items/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM items WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ deleted: this.changes });
  });
});

// Leaders endpoints
app.get('/api/leaders', (req, res) => {
  db.all('SELECT * FROM leaders ORDER BY id ASC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.post('/api/leaders', authenticateToken, requireAdmin, uploadLeaders.single('image'), (req, res) => {
  const { name, designation } = req.body;
  const image = req.file ? `/media/leaders/${req.file.filename}` : null;
  db.run('INSERT INTO leaders (name, designation, image) VALUES (?, ?, ?)', [name, designation, image], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ id: this.lastID, name, designation, image });
  });
});

app.put('/api/leaders/:id', authenticateToken, requireAdmin, uploadLeaders.single('image'), (req, res) => {
  const { id } = req.params;
  const { name, designation } = req.body;
  const image = req.file ? `/media/leaders/${req.file.filename}` : req.body.image;
  db.run('UPDATE leaders SET name = ?, designation = ?, image = ? WHERE id = ?', [name, designation, image, id], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ changed: this.changes });
  });
});

app.delete('/api/leaders/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM leaders WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ deleted: this.changes });
  });
});

// Working Committee endpoints
app.get('/api/working-committee', (req, res) => {
  db.all('SELECT * FROM working_committee ORDER BY id ASC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.post('/api/working-committee', authenticateToken, requireAdmin, uploadLeaders.single('image'), (req, res) => {
  const { name, designation } = req.body;
  const image = req.file ? `/media/leaders/${req.file.filename}` : null;
  db.run('INSERT INTO working_committee (name, designation, image) VALUES (?, ?, ?)', [name, designation, image], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ id: this.lastID, name, designation, image });
  });
});

app.put('/api/working-committee/:id', authenticateToken, requireAdmin, uploadLeaders.single('image'), (req, res) => {
  const { id } = req.params;
  const { name, designation } = req.body;
  const image = req.file ? `/media/leaders/${req.file.filename}` : req.body.image;
  db.run('UPDATE working_committee SET name = ?, designation = ?, image = ? WHERE id = ?', [name, designation, image, id], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ changed: this.changes });
  });
});

app.delete('/api/working-committee/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM working_committee WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ deleted: this.changes });
  });
});

// District Leaders endpoints
app.get('/api/district-leaders', (req, res) => {
  db.all('SELECT * FROM district_leaders ORDER BY id ASC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.post('/api/district-leaders', authenticateToken, requireAdmin, uploadLeaders.single('image'), (req, res) => {
  const { name, designation } = req.body;
  const image = req.file ? `/media/leaders/${req.file.filename}` : null;
  db.run('INSERT INTO district_leaders (name, designation, image) VALUES (?, ?, ?)', [name, designation, image], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ id: this.lastID, name, designation, image });
  });
});

app.put('/api/district-leaders/:id', authenticateToken, requireAdmin, uploadLeaders.single('image'), (req, res) => {
  const { id } = req.params;
  const { name, designation } = req.body;
  const image = req.file ? `/media/leaders/${req.file.filename}` : req.body.image;
  db.run('UPDATE district_leaders SET name = ?, designation = ?, image = ? WHERE id = ?', [name, designation, image, id], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ changed: this.changes });
  });
});

app.delete('/api/district-leaders/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM district_leaders WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ deleted: this.changes });
  });
});

// Circulars endpoints
app.get('/api/circular', (req, res) => {
  db.all('SELECT * FROM circulars ORDER BY id DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.post('/api/circular', authenticateToken, requireAdmin, uploadCirculars.single('file'), (req, res) => {
  const { title, date } = req.body;
  const file = req.file ? `/media/circulars/${req.file.filename}` : null;
  db.run('INSERT INTO circulars (title, date, file) VALUES (?, ?, ?)', [title, date, file], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ id: this.lastID, title, date, file });
  });
});

app.put('/api/circular/:id', authenticateToken, requireAdmin, uploadCirculars.single('file'), (req, res) => {
  const { id } = req.params;
  const { title, date } = req.body;
  const file = req.file ? `/media/circulars/${req.file.filename}` : req.body.file;
  db.run('UPDATE circulars SET title = ?, date = ?, file = ? WHERE id = ?', [title, date, file, id], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ changed: this.changes });
  });
});

app.delete('/api/circular/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM circulars WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ deleted: this.changes });
  });
});

// Gallery endpoints
app.get('/api/gallery', (req, res) => {
  db.all('SELECT * FROM gallery ORDER BY id DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.post('/api/gallery', authenticateToken, requireAdmin, uploadGallery.single('image'), (req, res) => {
  const { title } = req.body;
  const image = req.file ? `/media/gallery/${req.file.filename}` : null;
  db.run('INSERT INTO gallery (image, title) VALUES (?, ?)', [image, title], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ id: this.lastID, image, title });
  });
});

app.put('/api/gallery/:id', authenticateToken, requireAdmin, uploadGallery.single('image'), (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const image = req.file ? `/media/gallery/${req.file.filename}` : req.body.image;
  db.run('UPDATE gallery SET image = ?, title = ? WHERE id = ?', [image, title, id], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ changed: this.changes });
  });
});

app.delete('/api/gallery/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM gallery WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ deleted: this.changes });
  });
});

// Notifications endpoints
app.get('/api/notifications', (req, res) => {
  db.all('SELECT * FROM notifications ORDER BY id DESC', (err, rows) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(rows);
  });
});

app.post('/api/notifications', authenticateToken, requireAdmin, (req, res) => {
  const { title, message, date, link } = req.body;
  db.run('INSERT INTO notifications (title, message, date, link) VALUES (?, ?, ?, ?)', [title, message, date, link], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ id: this.lastID, title, message, date, link });
  });
});

app.put('/api/notifications/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  const { title, message, date, link } = req.body;
  db.run('UPDATE notifications SET title = ?, message = ?, date = ?, link = ? WHERE id = ?', [title, message, date, link, id], function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ changed: this.changes });
  });
});

app.delete('/api/notifications/:id', authenticateToken, requireAdmin, (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM notifications WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json({ deleted: this.changes });
  });
});

// Welcome/Info endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to SKSBV State Backend API',
    endpoints: {
      login: '/api/login',
      circular: '/api/circular',
      gallery: '/api/gallery',
      leaders: '/api/leaders',
      'district-leaders': '/api/district-leaders',
      notifications: '/api/notifications',
      'working-committee': '/api/working-committee'
    }
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Backend listening on http://localhost:${port}`));
