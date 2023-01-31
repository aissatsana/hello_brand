<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];

// Sanitize the form data
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

// Build the email message
$to = 'nastya.miss.7@gmail.com';
$subject = 'New message from contact form';
$headers = 'From: ' . $email . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$email_message = "Name: " . $name . "\n";
$email_message .= "Email: " . $email . "\n";

// Send the email
if (mail($to, $subject, $email_message, $headers)) {
    echo 'Your message has been sent.';
} else {
    echo 'There was a problem sending your message. Please try again later.';
}
?>
