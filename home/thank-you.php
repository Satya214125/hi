<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$phn = $_POST['phonenum'];
$comment = $_POST['comment'];
$formcontent="name: $name \n email: $email \n Phn: $phn \n  comment: $comment ";
$recipient = "contact@drpestout.com";
$subject = "Contact Form Banner";
$mailheader = "From: $email \r\n";
if (mail($recipient, $subject, $formcontent, $mailheader))
{ ?>
<center>
<h3>Thank You</h3>
<h5 class="headline-support">Your submission is received and we will contact you soon.</h5> 

</center>
<?php }
else
{
        echo "Please Try After Sometime";
}


?>