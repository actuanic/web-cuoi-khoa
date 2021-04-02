const model = {};


//// Viết lại model.register
model.register = async (data) => {
    // bắt đầu sử dụng firebase. 
    //=> bắt buộc phải đợi firebase gửi trả về kết quả thành công
    // Cú pháp xử lý bất đồng bộ thành đồng bộ như sau:

    try {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);
        // server đã tạo cho mình xong tk và pass để đăng nhập


        // cập nhật lại thông tin của người dùng hiện tại
        firebase.auth().currentUser.updateProfile({
            displayName: data.userName
        });



        // gửi mail thông báo xác thực email đã đăng ký
        firebase.auth().currentUser.sendEmailVerification();
        // hiển thị thong báo cho người dùng là:
        alert('Your email has been registed, please check your email ');
        /// sau khi thông báo xong. => chuyển người dùng về màn hình đăng nhập
        view.setActiveScreen('LoginScreen');
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }

}





model.login = async (dataLogin) => {
    try {
        await
            firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
    }
    catch (err) {
        console.log(err)
    }

}
