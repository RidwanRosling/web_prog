<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You</title>
  <link rel="stylesheet" href="slogin.css" />
</head>
<body>
<nav class="nav">
  <div class="logo">
    <p><a href="http://localhost:5173/">Wild Voice</a></p>
  </div>
  <div class="right-links">
    <a href="#">Support</a>
    <a href="#">Species</a>
    <a href="#">About Us</a>
  </div>
</nav>
<div class="container">
  <div class="box form-box">
    <header>THANK YOU!</header>
    <p><strong>Nama:</strong> <?php if (isset($_SESSION['nama'])) echo htmlspecialchars($_SESSION['nama']); ?></p>
    <p><strong>Email:</strong> <?php if (isset($_SESSION['email'])) echo htmlspecialchars($_SESSION['email']); ?></p>
    <p><strong>Pesan:</strong> <?php if (isset($_SESSION['pesan'])) echo htmlspecialchars($_SESSION['pesan']); ?></p>
    <p><strong>Nominal Donasi:</strong> Rp<?php if (isset($_SESSION['nominal'])) echo number_format($_SESSION['nominal']); ?></p>
    <p><strong>Metode Pembayaran:</strong> <?php if (isset($_SESSION['payment'])) echo htmlspecialchars($_SESSION['payment']); ?></p>
    <br>
    <a href="donate.php"><button class="btn">Donasi Lagi</button></a>
  </div>
</div>

</body>
</html>
