const comp = {};

comp.SignupScreen = `

<div class="container">
    <div class="lefts">
        <div class="div">
            <h1 style=" text-decoration: underline solid #e74c3c;">Sign Up</h1>
            <form id="register-form">
                <div class="input-wrapping">
                    <input class="input" type="text" name="userName" id="input_name" placeholder="Username...">
                    <div class="error" id="userName-error"></div>
                </div>

                <div class="input-wrapping">
                    <input class="input" type="email" name="email" id="input_email" placeholder="Email...">
                    <div class="error" id="email-error"></div>

                </div>
                <div class="input-wrapping">
                    <input class="input" type="password" name="password" id="input_pass" class="Input"
                        placeholder="Password...">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapping">
                    <input class="input" type="password" name="confirmPassword" id="input_confirmPass"
                        placeholder="Confirm Password...">
                    <div class="error" id="confirm-password-error"></div>
                </div>




                <button type="submit" id="bt">Sign up</button>
            </form>
            <div>
                <span class="cursor-pointer" id="redirect-to-login">Already have an account? Login</span>
                <p id="alertForUser"></p>
            </div>


        </div>

        <div>

        </div>

    </div>

</div>
`;

comp.LoginScreen = `


<div class="centering-login">

    <div class="container">

        <div class="div-login">

            <h1 style=" text-decoration: underline solid #e74c3c">Login</h1>

            <form id="login-form">

                <input class="input" type="email" name="email" id="input_email" placeholder="Email...">
                <div class="error" id="Login-email-error"></div>

                <input class="input" type="password" name="password" id="input_pass" placeholder="Password...">
                <div class="error" id="Login-pass-error"></div>

                <button type="submit" id="bt">Login</button>
                <span class="cursor-pointer" id="redirect-to-signup">Dont have a account? Sign Up</span>
            </form>


        </div>

        <div>

        </div>
    </div>



</div>
`;
comp.HomeScreen = `

<div class="nav-bar">
    <div class="urmom">
        <a class=" Logo" href="#">Logo</a>

    </div>
    <div class="content-box">
        <a class="a-co home" href="#">Home</a>
        <a class="a-co" href="#">About</a>
        <a class="a-co" href="#">Contact</a>
        <a class="a-co" href="#">News</a>
    </div>

    <div class= "user dropdown">
        <span><a class="a-co userr" href="#"> <i class="fas fa-bars"></i> User </a></span>
        <div class= "dropdown-content">
            <p class="text">Username: </p>
            <button onclick="logout()" id="log-out"><i class="fas fa-sign-out-alt"></i> Log out</button>
            
        </div>
   
    </div>  
</div>
<div class="main">
</div>

<div class = "image-box">
    <div>
        <span   id="redirect-to-csgo" ><img  class = "img-a" src="https://gamek.mediacdn.vn/133514250583805952/2021/2/22/photo-1-16139642311542094859234.png"
                alt=""></span>
        <span   id="redirect-to-league"><img class = "img-a" 
                src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7b/League_of_Legends_Cover.jpg/revision/latest?cb=20191018222445"
                alt=""></span>

        
    </div>
    <div>
        <span href=""><img class = "img-a"  src="https://digistatement.com/wp-content/uploads/2020/10/wr-regionalalpha-1920.jpg"
                alt=""></span>
        <span><img class = "img-a"
                src="https://cdn.oneesports.gg/wp-content/uploads/sites/4/2020/05/fps-valorant-2.jpg"
                alt=""></span>

    </div>
    <div>
    <span href=""><img class = "img-a"
    src="https://images.contentstack.io/v3/assets/blt76b5e73bfd1451ea/blt7ce277951f779aa6/5e75289dcd562e2d656cbb84/tft-seo.jpg"
    alt=""></span>

    </div>
    

</div>
<div class = "bt-box">
<button class = "see-more">See more</button>
</div>
<div class = "footer">
    <div class = "word-box">
        <a href="" class = "word-icon">Press</a>
        <a href="" class = "word-icon">Security</a>
        <a href="" class = "word-icon">Legal</a>
        <a href="" class = "word-icon">Leadership</a>
        <a href="" class = "word-icon">Terms of Service</a>
        <a href="" class = "word-icon">Privacy Notice</a>
        <a href="" class = "word-icon">Reader support</a>
        <a href="" class = "word-icon">E-verify</a>
    </div>
    <div class = "icon-box">
        <a href="" class = "icon"><i class="fab fa-facebook-f"></i></a>
        <a href="" class = "icon"><i class="fab fa-twitter"></i></a>
        <a href="" class = "icon"><i class="fab fa-linkedin-in"></i></a>
        <a href="" class = "icon"><i class="fab fa-youtube"></i></a>
    </div>

</div>




`;
comp.CsgoScreen = `
<div class="nav-bar">
    <div class="urmom">
        <a class="Logo" href="#">Logo</a>

    </div>
    <div class="content-box">
        <a class="a-co home" href="#">Home</a>
        <a class="a-co" href="#">About</a>
        <a class="a-co" href="#">Contact</a>
        <a class="a-co" href="#">News</a>
    </div>

    <div class= "user dropdown">
        <span><a class="a-co userr" href="#"> <i class="fas fa-bars"></i> User </a></span>
        <div class= "dropdown-content">
            <p class="text">Username: </p>
            <button onclick="logout()" id="log-out"><i class="fas fa-sign-out-alt"></i> Log out</button>
            
        </div>
   
    </div>  

</div>
<div class="main-csgo">
</div>

`;