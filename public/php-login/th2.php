<?php 
session_start();
include("conn.php");

// Pastikan user datang dari donate
if (!isset($_SESSION['email'])) {
  header("Location: donate.php");
}

// Ambil data donasi terbaru berdasarkan email
$email = $_SESSION['email'];
$query = mysqli_query($conn, "SELECT * FROM donations WHERE email='$email' ORDER BY id DESC LIMIT 1");
$data = mysqli_fetch_assoc($query);
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
<main class="thank-container">
  <div class="thank-wrapper">
    <video class="thank-video" id="thankVideo" autoplay muted playsinline preload="auto">
      <source src="check.mp4" type="video/mp4" />
    </video>
    <div class="thank-banner">
      <h1>🎉 Thank You for Your Donation! 🎉</h1>
      <p>Your support means a lot. We've received your contribution.</p>
    </div>
    <section class="thank-card">
      <h2>Donation Summary</h2>
      <?php if ($data) { ?>
      <table class="donation-table">
        <tr>
            <th>Name</th>
            <td><?php echo htmlspecialchars($data['nama']); ?></td>
        </tr>
        <tr>
            <th>Email</th>
            <td><?php echo htmlspecialchars($data['email']); ?></td>
        </tr>
        <tr>
            <th>Message</th>
            <td><?php echo htmlspecialchars($data['pesan']); ?></td>
        </tr>
        <tr><th>Amount</th><td>Rp<?php echo number_format($data['nominal']); ?></td></tr>
        <tr><th>Payment Method</th><td><?php echo htmlspecialchars($data['payment_method']); ?></td></tr>
      </table>
      <?php } else { ?>
      <p class="message">data donasition not founnd.</p>
      <?php } ?>
      <a href="donate.php" class="btn btn-primary">Donate Again</a>
    </section>

  </div>
</main>

</body>
</html>
