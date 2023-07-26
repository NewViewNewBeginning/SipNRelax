<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate first name
    $firstName = filter_input(INPUT_POST, 'first-name', FILTER_SANITIZE_STRING);
    if (empty($firstName)) {
        die('Error: First name is required');
    }

    // Sanitize and validate last name
    $lastName = filter_input(INPUT_POST, 'last-name', FILTER_SANITIZE_STRING);
    if (empty($lastName)) {
        die('Error: Last name is required');
    }

    // Sanitize and validate email
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Error: Invalid email format');
    }

    // Sanitize and validate phone
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    if (empty($phone)) {
        die('Error: Phone number is required');
    }

    // Sanitize and validate subject
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    if (empty($subject)) {
        die('Error: Subject is required');
    }

    // Sanitize and validate message
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    if (empty($message)) {
        die('Error: Message is required');
    }

    // Email structure
    $to = "michalkrawczyk666@wp.pl";
    $headers = "From: $email\r\n";
    $email_subject = "New form submission: $subject";
    $email_body = "You have received a new message from $firstName $lastName.\n".
                    "Here are the details:\n\n".
                    "First Name: $firstName\n".
                    "Last Name: $lastName\n".
                    "Email: $email\n".
                    "Phone: $phone\n".
                    "Message:\n$message";

    // Use wordwrap() if lines are longer than 70 characters
    $email_body = wordwrap($email_body, 70, "\r\n");

    // Send the email
    if(!mail($to, $email_subject, $email_body, $headers)) {
        die('Error: Unable to send email. Please try again later.');
    }

    // Redirect to a thank you page
    header("Location: html/thank-you.html");
}
?>
