<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <di class="container">
        <div class="box form-box">
        
        <?php
        include("php/login.php");
    if(isset($_POST['submit'])){
            $username = $_POST['username'];
            $email = $_POST['email'];
            $age = $_POST['age'];
            $password = $_POST['password'];
        

        $verifyquery = mysqli_query($conn, "SELECT Email FROM users WHERE Email='$email'");

        if(mysqli_num_rows($verifyquery) !=0){
            echo "<div class='message'>
                    <p>this email is used, try another!!</p>
                </div> <br>";
            echo "<a href='javascript:self.history.back()'><button class='btn'>Go Back</button>";
        }
        else{

            mysqli_query($conn, "INSERT INTO users(Username,Email,Age,password) VALUES('$username', '$email', '$age', '$password')") or die("erorrr");
            echo "<div class='message'>
                    <p>Registration Succesfully!!</p>
                </div> <br>";
            echo "<a href='index.php'><button class='btn'>Login Now</button>";
        }

        }else{
        
        ?>

            <header>Register</header>
            <form method="post">
                <div class="field input">
                    <label for="username">Username</label>
                    <input type="text" name="username" value="<?php $username ?>" id="username" placeholder="Enter Username" autocomplete="off" required><br>
                </div>
                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" value="<?php $email ?>" id="email" placeholder="Enter e-mail" autocomplete="off" required><br>
                </div>
                <div class="field input">
                    <label for="age">Age</label>
                    <input type="number" name="age"value="<?php $age ?>" id="Age" placeholder="Enter age" autocomplete="off" required><br>
                </div>
                <div class="field input">
                    <label for="password">Password</label>
                    <input type="text" name="password" id="password" placeholder="Enter Password" required><br>
                </div>
                <div class="field">
                    <input type="submit" class="btn" name="submit" value="Register" required>
                </div>
                <div class="links">
                    Already Have Account? <a href="index.php">Sign In!</a>
                </div>
            </form>
        </div>
        <?php } ?>
    </div>
</body>
</html>