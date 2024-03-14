function showPassword() {
    var passwordInput = document.getElementById("input-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        alert("Bạn có muốn hiện mật khẩu");
    } else {
        passwordInput.type = "password";
        alert("Bạn nhập còn thiếu");
    }
}