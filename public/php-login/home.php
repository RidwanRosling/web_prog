<?php 
    session_start();
    include("conn.php");
    if(!isset($_SESSION['valid'])){
        header("Location: login.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
    <button id="loginBtn">Login</button>
</head>
<body>
    <nav class="nav">
        <div class="logo">
            <p><a href="home.php">Logo</a></p>
        </div>
        <div class="right-links">
            <?php
            $id = $_SESSION['id'];
            $query = mysqli_query($conn, "SELECT * FROM users WHERE id='$id'");
            
            while($result = mysqli_fetch_assoc($query)){
                $resname = $result['Username'];
                $resemail = $result['Email'];
                $resage = $result['Age'];
                $resid = $result['id'];
            }
            ?>
            <a href="edit.php">Change Profile</a>
            <a href="logout.php"> <button class="btn">Log Out</button></a>
        </div>
    </nav>
    <main>
        <div class="main-box top">
            <div class="top">
                <div class="box">
                    <p>hello welcome</p>
                </div>
            </div>
        </div>
    </main>
</body>
</html>