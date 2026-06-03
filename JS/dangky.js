const dangkyForm = document.getElementById("dangkyForm");

dangkyForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password-1").value.trim();
    const password2 = document.getElementById("password-2").value.trim();

    if(email === "" || password1 === "" || password2 === ""){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if(password1 !== password2){
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some(user => user.email === email);

    if(emailExists){
        alert("Email đã tồn tại!");
        return;
    }

    users.push({
        email: email,
        password: password1
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");

    window.location.href = "Login.html";
});