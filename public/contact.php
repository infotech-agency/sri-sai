<?php
/**
 * Sri Sai Realtors — Contact Form Handler (PHPMailer)
 *
 * This file receives POST data from the Next.js frontend contact form,
 * validates and sanitizes input, and sends an email via PHPMailer.
 *
 * SETUP INSTRUCTIONS:
 * 1. Place your PHPMailer files in a /PHPMailer/ directory next to this file
 *    (or update the require paths below).
 * 2. Update the SMTP configuration section below with your credentials.
 * 3. Deploy this file to a PHP-enabled server (e.g., alongside the Next.js
 *    static export, or on a separate PHP host).
 * 4. Ensure CORS is configured correctly if PHP and Next.js are on different
 *    origins.
 *
 * Expected POST fields (JSON body or form-encoded):
 *   name, company, phone, email, projectType, location, message
 */

// --- CORS Headers (adjust origin for production) ---
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// --- PHPMailer setup (update paths as needed) ---
// require __DIR__ . '/PHPMailer/src/PHPMailer.php';
// require __DIR__ . '/PHPMailer/src/SMTP.php';
// require __DIR__ . '/PHPMailer/src/Exception.php';
//
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// --- SMTP Configuration (replace with your credentials) ---
$SMTP_HOST     = 'smtp.your-provider.com';
$SMTP_PORT     = 587;
$SMTP_USERNAME = 'your@email.com';
$SMTP_PASSWORD = 'your-smtp-password';
$SMTP_SECURE   = 'tls'; // 'tls' or 'ssl'

$MAIL_FROM     = 'noreply@yoursite.com';
$MAIL_FROM_NAME = 'Sri Sai Realtors Website';
$MAIL_TO       = 'info@srisairealtors.com'; // Where enquiries should be sent
$MAIL_TO_NAME  = 'Sri Sai Realtors';

// --- Read input ---
$rawInput = file_get_contents('php://input');
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (stripos($contentType, 'application/json') !== false) {
    $input = json_decode($rawInput, true);
} else {
    parse_str($rawInput, $input);
}

if (!$input) {
    $input = $_POST;
}

// --- Sanitize and validate ---
function clean($value) {
    return htmlspecialchars(trim($value ?? ''), ENT_QUOTES, 'UTF-8');
}

$name        = clean($input['name'] ?? '');
$company     = clean($input['company'] ?? '');
$phone       = clean($input['phone'] ?? '');
$email       = clean($input['email'] ?? '');
$projectType = clean($input['projectType'] ?? '');
$location    = clean($input['location'] ?? '');
$message     = clean($input['message'] ?? '');

$errors = [];

if (strlen($name) < 2) {
    $errors[] = 'Name is required';
}
if (strlen($phone) < 7) {
    $errors[] = 'A valid phone number is required';
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email address is invalid';
}
if (strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
    exit;
}

// --- Build email body ---
$subject = "New Enquiry from Website — {$name}";

$body  = "You have received a new enquiry from the Sri Sai Realtors website.\n\n";
$body .= "Name: {$name}\n";
$body .= "Company: {$company}\n";
$body .= "Phone: {$phone}\n";
$body .= "Email: {$email}\n";
$body .= "Project Type: {$projectType}\n";
$body .= "Location: {$location}\n";
$body .= "Message:\n{$message}\n";

// --- Send email via PHPMailer (uncomment after setup) ---
/*
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = $SMTP_USERNAME;
    $mail->Password   = $SMTP_PASSWORD;
    $mail->SMTPSecure = $SMTP_SECURE;
    $mail->Port       = $SMTP_PORT;

    $mail->setFrom($MAIL_FROM, $MAIL_FROM_NAME);
    $mail->addAddress($MAIL_TO, $MAIL_TO_NAME);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->CharSet = 'UTF-8';

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
exit;
*/

// --- Fallback: simulate success for frontend testing ---
// Remove this block once PHPMailer is configured above.
echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully']);
exit;
