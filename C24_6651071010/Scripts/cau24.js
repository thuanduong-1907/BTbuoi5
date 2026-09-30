// Câu 24: Xuất thứ trong tuần từ ngày, tháng, năm (dùng đối tượng Date)
var TEN_THU = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

function xuatThu() {
    var sd = document.getElementById("ngay").value.trim();
    var sy = document.getElementById("nam").value.trim();
    var m = parseInt(document.getElementById("thang").value, 10);
    var o = document.getElementById("ketqua");
    var re = /^\d+$/;

    if (!re.test(sd) || !re.test(sy)) {
        o.className = "loi";
        o.textContent = "Ngày và năm phải là số nguyên dương!";
        return;
    }
    var d = parseInt(sd, 10), y = parseInt(sy, 10);
    var date = new Date(2000, 0, 1);
    date.setFullYear(y, m - 1, d);          // cho phép năm < 100
    if (y < 1 || date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) {
        o.className = "loi";
        o.textContent = "Ngày tháng năm không hợp lệ!";
        return;
    }
    o.className = "";
    o.textContent = TEN_THU[date.getDay()] + " Ngày " + d + " tháng " + m + " năm " + y;
}
document.getElementById("btnXuat").addEventListener("click", xuatThu);
