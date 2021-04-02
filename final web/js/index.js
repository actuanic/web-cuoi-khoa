const init = () => {
    // khai báo cài đặt của firebase
    var firebaseConfig = {
      apiKey: "AIzaSyBfO8iPgRiFUZqNb_Ewm98_EmUGSqHptAc",
      authDomain: "ur-mom-77b4a.firebaseapp.com",
      projectId: "ur-mom-77b4a",
      storageBucket: "ur-mom-77b4a.appspot.com",
      messagingSenderId: "866781025574",
      appId: "1:866781025574:web:3b3ce95ad021d850119de7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    // để xem mình đã nhúng được firebase chưa 
    console.log(firebase.app().name); // in ra đc chữ default là nhúng xong firebase
  
  
    console.log("window loaded");

  
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);
      if (user && user.emailVerified) {
        // nếu như user đã đăng nhập=> tạo tên và email
        model.currentUser = {
          displayName: user.displayName,
          email: user.email
        };
        // sau đó lại về màn hình LoginScreen @@???
        view.setActiveScreen('HomeScreen');
        // User is signed in.
      } else {
        view.setActiveScreen('LoginScreen');
        // alert("Please check your email"); check cc
      }
  

    });
  

  
  };
  
  window.onload = init;