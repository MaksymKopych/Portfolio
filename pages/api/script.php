<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['offer'];
    $subject = $_POST['subject'];
  // Validate the data (e.g. check if the email is valid, etc.)

  // Send the email
  $to = 'maximkopych@gmail.com';
  $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
  $headers = "From: $email\r\nReply-To: $email\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo 'Message sent successfully!';
  } else {
    echo 'Message could not be sent.';
  }
}