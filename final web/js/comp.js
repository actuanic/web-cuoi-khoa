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

    <div class="user dropdown">
        <span><a class="a-co userr" href="#"> <i class="fas fa-bars"></i> User </a></span>
        <div class="dropdown-content">
            <p class="text">Username: </p>
            <button onclick="logout()" id="log-out"><i class="fas fa-sign-out-alt"></i> Log out</button>

        </div>

    </div>
</div>
<div class="main">
</div>

<div class="image-box">
    <div>
        <span id="redirect-to-csgo"><img class="img-a"
                src="https://gamek.mediacdn.vn/133514250583805952/2021/2/22/photo-1-16139642311542094859234.png"
                alt=""></span>
        <span id="redirect-to-league"><img class="img-a"
                src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7b/League_of_Legends_Cover.jpg/revision/latest?cb=20191018222445"
                alt=""></span>


    </div>
    <div>
        <span href=""><img class="img-a"
                src="https://digistatement.com/wp-content/uploads/2020/10/wr-regionalalpha-1920.jpg" alt=""></span>
        <span><img class="img-a" src="https://cdn.oneesports.gg/wp-content/uploads/sites/4/2020/05/fps-valorant-2.jpg"
                alt=""></span>

    </div>
    <div>
        <span href=""><img class="img-a"
                src="https://images.contentstack.io/v3/assets/blt76b5e73bfd1451ea/blt7ce277951f779aa6/5e75289dcd562e2d656cbb84/tft-seo.jpg"
                alt=""></span>

    </div>


</div>
<div class="bt-box">
    <button class="see-more">See more</button>
</div>
<div class="footer">
    <div class="word-box">
        <a href="" class="word-icon">Press</a>
        <a href="" class="word-icon">Security</a>
        <a href="" class="word-icon">Legal</a>
        <a href="" class="word-icon">Leadership</a>
        <a href="" class="word-icon">Terms of Service</a>
        <a href="" class="word-icon">Privacy Notice</a>
        <a href="" class="word-icon">Reader support</a>
        <a href="" class="word-icon">E-verify</a>
    </div>
    <div class="icon-box">
        <a href="https://www.facebook.com/real.nhatminh.75/" class="icon"><i class="fab fa-facebook-f"></i></a>
        <a href="" class="icon"><i class="fab fa-twitter"></i></a>
        <a href="" class="icon"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.youtube.com/channel/UCrxYZDPo7eeW3_8tR0TQhgQ" class="icon"><i
                class="fab fa-youtube"></i></a>
    </div>

</div>




`;
comp.CsgoScreen = `
<div class="nav-bar">
    <div class="urmom">
        <a class="Logo blue" href="#">Logo</a>

    </div>
    <div class="content-box">
        <a class="a-co home" href="#">Home</a>
        <a class="a-co" href="#">About</a>
        <a class="a-co" href="#">Contact</a>
        <a class="a-co" href="#">News</a>
    </div>

    <div class="user dropdown">
        <span><a class="a-co userr" href="#"> <i class="fas fa-bars"></i> User </a></span>
        <div class="dropdown-content">
            <p class="text">Username: </p>
            <button onclick="logout()" id="log-out"><i class="fas fa-sign-out-alt"></i> Log out</button>

        </div>

    </div>

</div>
<div class="main-csgo">
</div>
<div class="content-boxes">
    <div class="title-padding">
        <p class="blog">Csgo infomation, tips, tricks</p>
    </div>

    <strong>
        <p>1. Tips</p>
    </strong>
    <p>At first glance, <strong>Counter-Strike: Global Offensive </strong>is a very simple game - <strong>just run
            around and shoot those enemies.</strong> This is such an illusion, and the more experience you gain in this
        super popular shooter, the deeper an abyss opens to your amazed eyes. And the question arises: How to get better
        at CS:GO?</p>
    <p> <strong> Tips number 1: Start with core weapons: </strong>
    <p>
    <p> <strong>There are a lot of guns in CS:GO.</strong> Some of them look very impressive, and many beginners will
        want to introduce them to the game. For example, they purchase Desert Eagle or AWP and can’t understand how such
        great weapons don’t deliver nice headshots.</p>
    <p>It would be much better to start your practice with more effective in-game firearms. They are:</p>
    <ul>
        <li><strong>Pistols:</strong> Tec-9 (T), Five-SeveN (CT), P250 (both teams)</li>
        <li><strong>Riffles:</strong>AK-47 (T) and M4A4/M4A1-S (CT)</li>



    </ul>
    <p<strong>>Don’t rush to learn about other guns</strong> unless you can use the above mentioned ones on a decent
        level - this is how to play CS GO and get victories. The rifles are especially effective and most pro-players
        take them to matches as well.</p>
        <p>This game has lots of tricky aspects. It may be quite difficult for beginners to understand them and start
            enjoying both the playing process and the winning results. This guide highlights some of the basic
            principles -<strong> understand them and you will begin to feel the whole game much better.</strong></p>
        <p>By using these<strong> CS:GO tips</strong> on practice you will boost confidence in matches - and your mood
            is the power to lead the whole team to victories. Do you know what else will boost your confidence? Adding
            some great items to your inventory! Buy CS:GO skins on DMarket to change the in-game atmosphere and your
            reputation.</p>
        <div class="vid-center">
            <iframe width="900" height="515" src="https://www.youtube.com/embed/blYoIB7p8ik"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
        <p> <strong> Tips number 2: Practice Accurate Shooting: </strong>
        <p>
        <p>There are lots of things happening in CS:GO matches, so you might have no time to stay calm and practice
            aiming and shooting. But it is a worthy training that will pay off nicely.
        <p>
        <ul>
            <li>Start the game on community-created maps specially dedicated to aiming. Just search for aim training on
                the Steam Workshop and try out any map you find interesting. Make this CS GO training your regular
                practice.</li>
            <li>Play with bots and try to concentrate only on shooting. Keep the other important aspects aside for a
                while.</li>
            <li>Play the Deathmatch mode - it’s a very good practice of fast shooting.</li>
        </ul>
        <div class="vid-center">
            <iframe width="900" height="515" src="https://www.youtube.com/embed/ooAxzbGUCZA"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>



</div>

`;