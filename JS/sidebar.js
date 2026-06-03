const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", function () {

        // Xóa màu xanh khỏi tất cả menu
        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        // Thêm màu xanh cho menu đang click
        this.classList.add("active");

        // Chuyển trang
        const page = this.getAttribute("data-page");

        if(page){
            window.location.href = page;
        }
    });
});

const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    window.location.href = "Login.html";
});