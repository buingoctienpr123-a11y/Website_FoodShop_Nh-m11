document.getElementById("giohang").addEventListener("click", function(){
    window.location.href = "GioHang.html";
});

const userBtn = document.getElementById("userBtn");
const userDropdown = document.getElementById("userDropdown");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(currentUser){
    userDropdown.innerHTML = `
        <div class="user-info">
            <strong>Thông tin cá nhân</strong>
            <p>${currentUser.email}</p>
        </div>

        <a href="ThongTinCaNhan.html">Tài khoản của tôi</a>
        <a href="DonHangCuaToi.html">Đơn hàng của tôi</a>
        <a href="DoiMatKhau-Email.html">Đổi mật khẩu</a>
        <button id="logoutUser">Đăng xuất</button>
    `;
}else{
    userDropdown.innerHTML = `
        <a href="Login.html">Đăng nhập</a>
        <a href="DangKy.html">Đăng ký</a>
    `;
}

userBtn.addEventListener("click", function(){
    userDropdown.classList.toggle("active");
});

document.addEventListener("click", function(e){
    if(!e.target.closest(".user-menu")){
        userDropdown.classList.remove("active");
    }
});

const logoutUser = document.getElementById("logoutUser");

if(logoutUser){
    logoutUser.addEventListener("click", function(){
        localStorage.removeItem("currentUser");
        alert("Đã đăng xuất!");
        window.location.href = "Main_User.html";
    });
}