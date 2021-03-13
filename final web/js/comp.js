const comp = {};
comp.SignupScreen = `
<div class="container">
        <div class="lefts">
            <div class="div">
            <h1 style=" text-decoration: underline solid #2e86de;">Sign Up</h1>
                <div class ="input-wrapping"> 
                 
                    <input type="text" name="userName" id="input_name" placeholder="Username...">
                    <div class="error" id="userName-error"></div>
                </div>
                
                <div class ="input-wrapping"> 
                    <div class="error" id="email-error"></div>
                    <input type="email" name="email" id="input_email" placeholder="Email...">
                </div>
                <div class ="input-wrapping"> 
                    <input type="password" name="password" id="input_pass" placeholder="Password...">
                    <div class="error" id="password-error"></div>
                </div>
                <div class ="input-wrapping"> 
                    <input type="password" name="confirmPassword" id="input_confirmPass" placeholder="Confirm Password...">
                    <div class="error" id="confirm-password-error"></div>
                </div>
                

               
               
                <button id="bt" onclick="signUp()">Sign up</button>
                <div>
                    <span class = "cursor-pointer" id="redirect-to-login">Already have an account? Login</span>
                    <p id="alertForUser"></p>
                </div>


            </div>

            <div>

            </div>
            
        </div>
    </div>
`;

comp.LoginScreen = `

<div class="container">
     
            <div class="div-login">

                <h1 style=" text-decoration: underline solid #2e86de;">Login</h1>
                <input type="email" name="" id="input_email" placeholder="Email...">
                <input type="password" name="" id="input_pass" placeholder="Password...">
                <button id="bt" >Login</button>
                <span class = "cursor-pointer" id="redirect-to-signup">Dont have a account? Sign Up</span>


            </div>

            <div>

            </div>
            
      
    </div>
`;
comp.HomeScreen = `
`

window.onload = init;