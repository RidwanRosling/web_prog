<?php 
    session_start();
    include("php/login.php");
    if(!isset($_SESSION['valid'])){
        header("Location: index.php");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Profile</title>
    <link rel="stylesheet" href="style.css">
</head>
<>
    <div class="nav">
        <div class="logo">
            <p><a href="home.php">Logo</a></p>
        </div>
        <div class="right-links">
            <a href="#">Change Profile</a>
            <a href="Logout.php"><button class="btn">Log Out</button></a>
        </div>
    </div>
    <div class="container">
        <div class="box form-box">
            <?php
            if(isset($_POST['submit'])){
                $username = $_POST['username'];
                $email = $_POST['email'];
                $age = $_POST['age'];
                $id = $_SESSION['id'];

                $editquery = mysqli_query($conn, "UPDATE users SET Username='$username', Email='$email', Age='$age' WHERE Id='$id'") or die("eroor occurres");
                if($editquery){
                    echo "<div class='message'>
                        <p>Profile Update!!</p>
                        </div> <br>";
                    echo "<a href='home.php'><button class='btn'>Go Back</button>";
                }
            }else{

                $id = $_SESSION['id'];
                $query = mysqli_query($conn, "SELECT * FROM users WHERE Id='$id'");

                while($result = mysqli_fetch_assoc($query)){
                    $resname = $result["Username"];
                    $resemail = $result["Email"];
                    $resage = $result["Age"];
                }
            ?>
            <header>Change Profile</header>
            <form action="" method="post">
                <div class="field input">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter Username" autocomplete="off" required><br>
                </div>
                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter e-mail" autocomplete="off" required><br>
                </div>
                <div class="field input">
                    <label for="age">Age</label>
                    <input type="number" name="age" id="Age" placeholder="Enter age" autocomplete="off" required><br>
                </div>
                <div class="field">
                    <input type="submit" class="btn" name="submit" value="Upload" required>
                </div>
            </form>
        </div>
        <?php } ?>
    </div>
</body>
</html>