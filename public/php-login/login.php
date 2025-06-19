<?php 
    session_start()
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="box form-box">
            <?php
            include("conn.php");
            if(isset($_POST['submit'])){
                $email = mysqli_real_escape_string($conn,$_POST['email']);
                $password = mysqli_real_escape_string($conn,$_POST['password']);

                $result = mysqli_query($conn, "SELECT * FROM users WHERE email='$email' AND Password='$password'") or die ("Select Eroooooor");
                $row = mysqli_fetch_assoc($result);

                if(is_array($row) && !empty($row)){
                    $_SESSION['valid'] = $row['email'];
                    $_SESSION['username'] = $row['username'];
                    $_SESSION['age'] = $row['age'];
                    $_SESSION['id'] = $row['id'];
                }else{
                    echo "<div class='message'>
                        <p> Wrong Username or Password!</p>
                        </div> <br>";
                    echo "<a href='login.php'><button class='btn'>Go Back</button></a>";
                }
                if(isset($_SESSION['valid'])){
                    header("Location: home.php");
                }
            }else{
            ?>
            
            <header>Login</header>
            <form action="" method="post">
                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter Username" autocomplete="off" required><br>
                </div>
                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" autocomplete="off" required><br>
                </div>
                <div class="field">
                    <input type="submit" class="btn" name="submit" value="Login" required>
                </div>
                <div class="links">
                    Don't have account? <a href="regist.php">Sign Up!</a>
                </div>
            </form>
        </div>
        <?php } ?>
    </div>
</body>
</html>