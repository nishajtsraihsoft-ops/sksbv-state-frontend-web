<?php
// Leaders API Endpoint
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$parts = explode('/', trim($path, '/'));

// Route handling
$endpoint = end($parts);
$id = isset($parts[count($parts) - 1]) && is_numeric($parts[count($parts) - 1]) ? $parts[count($parts) - 1] : null;

try {
    if ($method === 'GET') {
        // Get all leaders
        $stmt = $pdo->query('SELECT * FROM leaders ORDER BY id ASC');
        $leaders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($leaders);
    } elseif ($method === 'POST') {
        // Create new leader - requires authentication
        $token = getAuthToken();
        if (!$token || !verifyToken($token)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized']);
            exit;
        }

        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'] ?? null;
        $designation = $data['designation'] ?? null;
        $image = $data['image'] ?? null;

        if (!$name || !$designation) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing required fields']);
            exit;
        }

        $stmt = $pdo->prepare('INSERT INTO leaders (name, designation, image) VALUES (?, ?, ?)');
        $stmt->execute([$name, $designation, $image]);
        
        echo json_encode([
            'id' => $pdo->lastInsertId(),
            'name' => $name,
            'designation' => $designation,
            'image' => $image
        ]);
    } elseif ($method === 'PUT' && $id) {
        // Update leader - requires authentication
        $token = getAuthToken();
        if (!$token || !verifyToken($token)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized']);
            exit;
        }

        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'] ?? null;
        $designation = $data['designation'] ?? null;
        $image = $data['image'] ?? null;

        $stmt = $pdo->prepare('UPDATE leaders SET name = ?, designation = ?, image = ? WHERE id = ?');
        $stmt->execute([$name, $designation, $image, $id]);
        
        echo json_encode(['changed' => $stmt->rowCount()]);
    } elseif ($method === 'DELETE' && $id) {
        // Delete leader - requires authentication
        $token = getAuthToken();
        if (!$token || !verifyToken($token)) {
            http_response_code(401);
            echo json_encode(['error' => 'Unauthorized']);
            exit;
        }

        $stmt = $pdo->prepare('DELETE FROM leaders WHERE id = ?');
        $stmt->execute([$id]);
        
        echo json_encode(['deleted' => $stmt->rowCount()]);
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
