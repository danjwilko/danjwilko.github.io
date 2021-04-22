<?php
    mail('yazbeeyondfitness@gmail.com', $_POST['name'], $_POST['phone'], $_POST['email'], $_POST['message']);
?>
<p>Your email has been sent.</p>

<?php
    mail('youremail@example.com', $_POST['subject'], $_POST['message']);
?>
<p>Your email has been sent.</p>