<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // email structure
    $to = "....@gmail.com";
    $headers = "From: $email\r\n";
    $email_subject = "New form submission: $subject";
    $email_body = "You have received a new message from $firstName $lastName.\n".
                    "Here are the details:\n\n".
                    "First Name: $firstName\n".
                    "Last Name: $lastName\n".
                    "Email: $email\n".
                    "Phone: $phone\n".
                    "Message:\n$message";
    
    // use wordwrap() if lines are longer than 70 characters
    $email_body = wordwrap($email_body, 70, "\r\n");

    // send the email
    mail($to, $email_subject, $email_body, $headers);

    // redirect to a thank you page
    header("Location: thankyou.html");
}
?>
