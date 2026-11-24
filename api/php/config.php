<?php
// Database configuration
define('DB_PATH', __DIR__ . '/../../backend/db.sqlite');

// Create PDO connection to SQLite
try {
    $pdo = new PDO('sqlite:' . DB_PATH);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Function to get JWT token from Authorization header
function getAuthToken() {
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        $parts = explode(' ', $headers['Authorization']);
        if (count($parts) === 2 && $parts[0] === 'Bearer') {
            return $parts[1];
        }
    }
    return null;
}

// Function to verify JWT token (simplified)
function verifyToken($token) {
    // For now, just check if token is not empty
    // In production, properly verify the JWT
    return !empty($token);
}
?>
