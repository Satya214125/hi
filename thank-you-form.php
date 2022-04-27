
<?php 
$chsopt=$_POST['chooseservices'];
$aprtm=$_POST['apartment'];
$phn = $_POST['phnnumber'];
$email = $_POST['email'];
$formcontent="chooseoption:$chsopt \n appartment:$aprtm \n phone:$phn \n Email:$email" ;
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
