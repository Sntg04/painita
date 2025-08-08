<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['user'];
    $pass = $_POST['password'];
    
    // Validar credenciales (deberías usar password_hash en producción)
    if ($user === 'asesor' && $pass === '123456') {
        $_SESSION['asesor_id'] = 1;
        header("Location: asesores/dashboard.php");
        exit();
    } else {
        $error = "Credenciales incorrectas";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login CRM PAINITA</title>
</head>
<body>
    <form method="POST">
        <input type="text" name="user" placeholder="Usuario">
        <input type="password" name="password" placeholder="Contraseña">
        <button type="submit">Ingresar</button>
        <?php if (isset($error)) echo "<p>$error</p>"; ?>
    </form>
</body>
</html>