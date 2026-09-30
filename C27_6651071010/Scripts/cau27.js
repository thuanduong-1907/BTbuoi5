// Câu 27: Xóa dòng tương ứng khi nhấn nút "Xóa"
var bang = document.getElementById("bang");

// Nhấn nút Xóa -> xóa dòng chứa nút đó (event delegation)
bang.addEventListener("click", function (e) {
    if (e.target.classList.contains("xoa")) {
        var dong = e.target.parentNode.parentNode;   // input -> td -> tr
        dong.parentNode.removeChild(dong);
    }
});

// Sửa số lượng / đơn giá -> tự cập nhật cột Tổng của dòng đó
bang.addEventListener("input", function (e) {
    if (e.target.classList.contains("soluong") || e.target.classList.contains("dongia")) {
        var dong = e.target.parentNode.parentNode;
        var sl = parseFloat(dong.querySelector(".soluong").value);
        var dg = parseFloat(dong.querySelector(".dongia").value);
        dong.querySelector(".tong").value = (isNaN(sl) || isNaN(dg)) ? "" : sl * dg;
    }
});
