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
<main class="thank-container">
  <div class="thank-wrapper">
    <video class="thank-video" id="thankVideo" autoplay muted playsinline preload="auto">
        <source src="check.mp4" type="video/mp4" />
    </video>
    <script>
      const video = document.getElementById('thankVideo');
      video.addEventListener('ended', () => {
        video.pause();
        video.currentTime = video.duration;
      });
    </script>
    <div class="thank-banner">
      <h1>🎉 Thank You for Your Donation! 🎉</h1>
      <p>Your support means a lot. We've received your contribution.</p>
    </div>
    <section class="thank-card">
      <h2>Donation Summary</h2>
      <div class="info-grid">
        <table class="donation-table">
          <tr>
            <th>Name</th>
            <td><?php if(isset($_SESSION['nama'])) echo htmlspecialchars($_SESSION['nama']); ?></td>
          </tr>
          <tr>
            <th>Email</th>
            <td><?php if(isset($_SESSION['email'])) echo htmlspecialchars($_SESSION['email']); ?></td>
          </tr>
          <tr>
            <th>Message</th>
            <td><?php if(isset($_SESSION['pesan'])) echo htmlspecialchars($_SESSION['pesan']); ?></td>
          </tr>
          <tr>
            <th>Amount</th>
            <td>Rp<?php if(isset($_SESSION['nominal'])) echo number_format($_SESSION['nominal']); ?></td>
          </tr>
          <tr>
            <th>Payment Method</th>
            <td><?php if(isset($_SESSION['payment'])) echo htmlspecialchars($_SESSION['payment']); ?></td>
          </tr>
        </table>
      </div>
      <a href="donate.php" class="btn btn-primary">Donate Again</a>
    </section>

  </div>
</main>
</body>
</html>
