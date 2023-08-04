<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Configurações do email
    $to = "kaiqueoliveira257@gmail.com"; // Seu email
    $subject = "Mensagem do formulário de contato";
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Envie o email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array("status" => "success"));
    } else {
        echo json_encode(array("status" => "error"));
    }
}
?>
