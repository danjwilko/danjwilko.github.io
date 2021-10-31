<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "danielwilkinson0991@gmail.com";
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);
    header
  }