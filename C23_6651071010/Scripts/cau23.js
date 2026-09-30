// Câu 23: Tính lương tháng = Lương * Hệ số lương
function tinhLuong() {
    var luong = parseFloat(document.getElementById("luong").value);
    var heso = parseFloat(document.getElementById("heso").value);
    var o = document.getElementById("luongthang");
    if (isNaN(luong) || luong < 0) {
        o.className = "loi";
        o.textContent = "Lương không hợp lệ!";
        return;
    }
    o.className = "";
    o.textContent = Math.round(luong * heso * 100) / 100;
}
document.getElementById("btnTinh").addEventListener("click", tinhLuong);
