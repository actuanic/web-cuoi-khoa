const controller = {};
controller.Signup = (data) => {


  if (data.userName.trim() === "") {
    document.getElementById("userName-error").innerText =
      "Please input first name";
  } else {
    document.getElementById("userName-error").innerText = ""; // div rỗng => height == 0
  }
  if (data.email.trim() === "") {
    document.getElementById("email-error").innerText =
      "Please input your email";
  } else {
    document.getElementById("email-error").innerText = "";
  }

  if (data.password.trim() === "") {
    document.getElementById("password-error").innerText =
      "Please input your password";
  } else {
    document.getElementById("password-error").innerText = "";
  } 
  if (data.confirmPassword.trim() === "") {
    document.getElementById("confirm-password-error").innerText =
      "Please input confirm password";
  } else if (data.confirmPassword.trim() !== data.password.trim()) {
    document.getElementById("confirm-password-error").innerText =
      "Password didn't match";
  } else {
    document.getElementById("confirm-password-error").innerText = "";
  }
  


  /// đây là bước kiểm tra điều kiện đăng kýz
  if (data.userName !== "" &&
    data.email !== "" &&
    data.password !== "" &&
    data.confirmPassword !== "" &&
    data.password === data.confirmPassword) {
      model.register(data); // gọi tới firebase để tạo một người dùng mới
  }
};

///////////////////////
controller.login = (dataLogin) => {
  if (dataLogin.email.trim() === "") {
    document.getElementById("Login-email-error").innerHTML = 'Please input email';
  }
  else {
    document.getElementById("Login-email-error").innerHTML = '';
  }

  if (dataLogin.password === "") {
    document.getElementById("Login-pass-error").innerHTML = 'Please input password';
  }
  else {
    document.getElementById("Login-pass-error").innerHTML = '';
  }
  if (dataLogin.email !== "" &&
      dataLogin.password !== "") {
      model.login(dataLogin);
  }
}

