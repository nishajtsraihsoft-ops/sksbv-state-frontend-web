<?php
// Circulars API Endpoint
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id']) ? $_GET['id'] : null;

try {
    if ($method === 'GET') {
        $stmt = $pdo->query('SELECT * FROM circulars ORDER BY id DESC');
        $circulars = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($circulars);
    } elseif ($method === 'POST') {
        $token = getAuthToken();
        if (!$token || !verifyToken($token)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized']);
            exit;
        }

        $data = json_decode(file_get_contents('php://input'), true);
        $title = $data['title'] ?? null;
        $date = $data['date'] ?? date('Y-m-d');
        $file = $data['file'] ?? null;

        if (!$title) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing title']);
            exit;
        }

        $stmt = $pdo->prepare('INSERT INTO circulars (title, date, file) VALUES (?, ?, ?)');
        $stmt->execute([$title, $date, $file]);
        
        echo json_encode([
            'id' => $pdo->lastInsertId(),
            'title' => $title,
            'date' => $date,
            'file' => $file
        ]);
    } elseif ($method === 'PUT' && $id) {
        $token = getAuthToken();
        if (!$token || !verifyToken($token)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized']);
            exit;
        }

        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare('UPDATE circulars SET title = ?, date = ?, file = ? WHERE id = ?');
        $stmt->execute([$data['title'], $data['date'], $data['file'], $id]);
        
        echo json_encode(['changed' => $stmt->rowCount()]);
    } elseif ($method === 'DELETE' && $id) {
        $token = getAuthToken();
        if (!$token || !verifyToken($token)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized']);
            exit;
        }

        $stmt = $pdo->prepare('DELETE FROM circulars WHERE id = ?');
        $stmt->execute([$id]);
        
        echo json_encode(['deleted' => $stmt->rowCount()]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
