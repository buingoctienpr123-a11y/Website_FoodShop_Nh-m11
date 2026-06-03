const addBtn = document.getElementById("addProductBtn");

if(addBtn){
    addBtn.addEventListener("click", function(){
        window.location.href = "ThemSanPham.html";
    });
}

const editBtn = document.getElementById("updateProductBtn");

if(editBtn){
    editBtn.addEventListener("click", function(){
        window.location.href = "SuaSanPham.html";
    });
}