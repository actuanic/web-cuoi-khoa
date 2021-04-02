const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "HomeScreen":
            document.getElementById('mainscreen').innerHTML = comp.HomeScreen

            document.getElementById('redirect-to-csgo').addEventListener('click', () => {
                view.setActiveScreen('CsgoScreen');
            });

            console.log("something");
            
            
            break;
        case "CsgoScreen":
            document.getElementById('mainscreen').innerHTML = comp.CsgoScreen
            document.querySelector('.home').addEventListener('click', () => {
                view.setActiveScreen('HomeScreen')
            });

        break;
        


        case "SignupScreen":
            document.getElementById('mainscreen').innerHTML = comp.SignupScreen;

            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    userName: registerForm.userName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                console.log(data);
                controller.Signup(data); // nhớ bước này không hửm Minh ko nhớ cái bước controller(data)
            });

            document.getElementById('redirect-to-login').addEventListener('click', () => {
                console.log("di tới Login Screen");
                view.setActiveScreen('LoginScreen');

            });
            break;

            // man loginScreen
        case "LoginScreen":
            document.getElementById('mainscreen').innerHTML = comp.LoginScreen;
            
            const LoginForm = document.getElementById('login-form');
            LoginForm.email.value = LoginForm.email.value.trim();
            console.log(LoginForm);
            LoginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const dataLogin = {
                    email: LoginForm.email.value,
                    password: LoginForm.password.value
                    
                };
                console.log(dataLogin); 
                controller.login(dataLogin);
             

            });


        


            document.getElementById('redirect-to-signup').addEventListener('click', () => {
                view.setActiveScreen('SignupScreen')
            });
          
        break;

      

    }

};

