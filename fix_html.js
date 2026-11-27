const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const backupStaticSite = path.join(rootDir, 'backup_static_site', 'assets');
const targetAssets = path.join(rootDir, 'assets');

// 1. Copy Vendor and JS files from backup to the new assets directory if present
if (fs.existsSync(path.join(backupStaticSite, 'vendor'))) {
    fs.cpSync(path.join(backupStaticSite, 'vendor'), path.join(targetAssets, 'vendor'), { recursive: true });
}
if (fs.existsSync(path.join(backupStaticSite, 'js'))) {
    fs.cpSync(path.join(backupStaticSite, 'js'), path.join(targetAssets, 'js'), { recursive: true });
}

const scriptsToInject = `
  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>
</body>
`;

// 2. Loop through all .html files and patch them
const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(rootDir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // Fix absolute routing links to point to .html files locally
    html = html.replace(/href="\/about"/g, 'href="about.html"');
    html = html.replace(/href="\/leaders"/g, 'href="leaders.html"');
    html = html.replace(/href="\/gallery"/g, 'href="gallery.html"');
    html = html.replace(/href="\/wings"/g, 'href="wings.html"');
    html = html.replace(/href="\/circulars"/g, 'href="circulars.html"');
    html = html.replace(/href="\/notifications"/g, 'href="notifications.html"');
    html = html.replace(/href="\/featured-events"/g, 'href="featured-events.html"');
    html = html.replace(/href="\/contact"/g, 'href="contact.html"');
    html = html.replace(/href="\/"/g, 'href="index.html"'); // Catch exactly "/"

    // Inject scripts
    if (!html.includes('assets/js/main.js')) {
        html = html.replace(/<\/body>/g, scriptsToInject);
    }

    fs.writeFileSync(filePath, html);
    console.log(`Patched ${file}`);
});

console.log('HTML and Script patches applied successfully!');
