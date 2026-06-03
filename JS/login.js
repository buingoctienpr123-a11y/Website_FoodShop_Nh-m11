const loginForm = document.getElementById("loginForm");

const adminAccount = {
    email: "admin@gmail.com",
    password: "123",
    role: "admin"
};

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Kiểm tra admin trước
    if(email === adminAccount.email && password === adminAccount.password){
        alert("Đăng nhập Admin thành công!");

        localStorage.setItem("currentUser", JSON.stringify(adminAccount));

        window.location.href = "Dashboard.html";
        return;
    }

    // Kiểm tra user đã đăng ký
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u =>
        u.email === email &&
        u.password === password
    );

    if(user){
        alert("Đăng nhập User thành công!");

        localStorage.setItem("currentUser", JSON.stringify({
            email: user.email,
            role: "user"
        }));

        window.location.href = "Main_User.html";
    }else{
        alert("Sai email hoặc mật khẩu!");
    }
});