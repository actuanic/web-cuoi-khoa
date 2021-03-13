const view = {};
view.setActiveScreen = (screenName) =>{
    switch(screenName) {
        case "HomeScreen":
        document.getElementById('mainscreen').innerHTML = comp.HomeScreen
        break; 


        case "SignupScreen":
        document.getElementById('mainscreen').innerHTML = comp.SignupScreen;
        document.getElementById('redirect-to-login').addEventListener('click',() =>{
            view.setActiveScreen('LoginScreen')
            e.preventDefault();
        })
     
        break;

        case "LoginScreen":
        document.getElementById('mainscreen').innerHTML = comp.LoginScreen
        document.getElementById('redirect-to-signup').addEventListener('click',()=>{
            view.setActiveScreen('SignupScreen')
            
        })
    }
};

