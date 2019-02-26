<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
    // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //     // Get the form fields and remove whitespace.
    //     $name = ($_POST["name"]));
    //     $phone = ($_POST["phone"]));
    //     $email = $_POST['email'];
    //     $msg = ($_POST["message"]);

    //     // Set the recipient email address.
    //     // FIXME: Update this to your desired email address.
    //     $recipient = "diankhismaw@gmail.com";

    //     // Set the email subject.
    //     $subject = "New contact from $name";

    //     // Build the email content.
    //     $email_content = "Name: $name\n";
    //     $email_content = "Phone: $phone\n";
    //     $email_content .= "Email: $email\n\n";
    //     $email_content .= "Message:\n$msg\n";

    //     // Build the email headers.
    //     $email_headers = "From: $name <$email>";

    //     // Send the email.
    //     if (mail($recipient, $subject, $email_content, $email_headers)) {
    //         // Set a 200 (okay) response code.
    //         http_response_code(200);
    //         echo "Thank You! Your message has been sent.";
    //     } else {
    //         // Set a 500 (internal server error) response code.
    //         http_response_code(500);
    //         echo "Oops! Something went wrong and we couldn't send your message.";
    //     }

    // } else {
    //     // Not a POST request, set a 403 (forbidden) response code.
    //     http_response_code(403);
    //     echo "There was a problem with your submission, please try again.";
    // }
    if($nama && $email && $subject && $message) {

        $email ="
        <table border=\"1\" style=\"border-collapse:collapse;font-family:'Trebuchet MS',Arial, Helvetica, sans-serif;border-color:#DEDEDE;\" cellpadding=\"3\">
        <tr>
        <td width=\"80\" valign=\"top\" style=\"border-color:#DEDEDE;\">Nama</td>
        <td width=\"380\" valign=\"top\" style=\"border-color:#DEDEDE;\">".$nama."</td>
        </tr>
        <tr>
        <td width=\"80\" valign=\"top\" style=\"border-color:#DEDEDE;\">Email</td>
        <td width=\"380\" valign=\"top\" style=\"border-color:#DEDEDE;\">".$email."</td>
        </tr>
        <tr>
        <td width=\"80\" valign=\"top\" style=\"border-color:#DEDEDE;\">Pesan</td>
        <td width=\"380\" valign=\"top\" style=\"border-color:#DEDEDE;\">".$message."</td>
        </tr>
        </table>
        ";

        $to  = 'diankhismaw@gmail.com';
        // $subject = '[SDI Melati Nusantara] '.$subject.'';
        $message = $email;
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        if(mail($to, $message, $headers)){

            ?>
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <br /><br /><br /><br />
                        <h3>Pesan Terkirim!</h3>
                        Terima kasih <?=$nama?>. Pesan anda berhasil terkirim!
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                </div>
            <?php
        }else{
            ?>
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <br /><br /><br /><br />
                        <h3>Pesan Gagal Terkirim!</h3>
                        Harap Coba Beberapa Saat Lagi.
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                </div>
            <?php
        }
        }else{


?>
<?php }?>   

