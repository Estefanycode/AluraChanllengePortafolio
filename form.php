<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $asunto = $_POST["asunto"];
  $mensaje = $_POST["mensaje"];
  
  // Configuración de correo electrónico
  $destinatario = "gahusteff@gmail.com";
  $encabezados = "From: $nombre <$email>" . "\r\n" .
                "Reply-To: $email" . "\r\n" .
                "Content-type: text/plain; charset=UTF-8" . "\r\n" .
                "X-Mailer: PHP/" . phpversion();
  
  // Envío del correo electrónico
  $enviado = mail($destinatario, $asunto, $mensaje, $encabezados);
  
  if ($enviado) {
    http_response_code(200); // OK
  } else {
    http_response_code(500); // Error del servidor
  }
} else {
  http_response_code(400); // Solicitud incorrecta
}
?>
