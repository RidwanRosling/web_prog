<?php 
session_start();
include("conn.php");

if (isset($_POST['submit'])) {
    $nama = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pesan = mysqli_real_escape_string($conn, $_POST['pesan']);
    $nominal = (int)$_POST['amount'];
    $payment = mysqli_real_escape_string($conn, $_POST['payment-method']);

    $insert = mysqli_query($conn, "INSERT INTO donations(nama, email, nominal, pesan, payment_method) VALUES('$nama','$email','$nominal','$pesan','$payment')");

    if ($insert) {
        $_SESSION['nama'] = $nama;
        $_SESSION['email'] = $email;
        $_SESSION['nominal'] = $nominal;
        $_SESSION['pesan'] = $pesan;
        $_SESSION['payment'] = $payment;
        header("Location: thanks.php");
        exit();
    } else {
        echo "<div class='message'><p>Gagal menyimpan donasi.</p></div><br>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Donate</title>
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
    <header>DONATION</header>
    <form action="" method="post">
      <div class="field input">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
      </div>
      <div class="field input">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
      </div>
      <div class="field input">
        <label for="pesan">Pesan:</label>
        <input type="text" name="pesan" id="pesan">
      </div>
      <div class="field input">
        <label for="amount">Donation Amount:</label>
        <input type="number" name="amount" id="amount" required>
      </div>
      <div class="field input">
        <label for="payment-method">Payment Method:</label>
        <select id="payment-method" name="payment-method" required>
            <option value="">Select Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
        </select>
      </div>
      <button type="submit" name="submit" class="btn btn-primary">Donate</button>
    </form>
  </div>
</div>

</body>
</html>
