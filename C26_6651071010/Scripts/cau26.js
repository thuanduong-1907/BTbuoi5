// Câu 26: Tính Can Chi của năm âm lịch từ năm dương lịch
var CAN = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
var CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

function tinhCanChi() {
    var input = document.getElementById("namDL");
    var out = document.getElementById("canChi");
    var loi = document.getElementById("loi");
    var s = input.value.trim();

    out.value = "";
    // Validate: bắt buộc nhập, chỉ chứa chữ số, nằm trong khoảng 1 - 9999
    if (s === "") {
        loi.textContent = "Vui lòng nhập năm dương lịch!";
    } else if (!/^\d+$/.test(s)) {
        loi.textContent = "Năm phải là số nguyên dương (chỉ gồm chữ số)!";
    } else if (parseInt(s, 10) < 1 || parseInt(s, 10) > 9999) {
        loi.textContent = "Năm phải nằm trong khoảng từ 1 đến 9999!";
    } else {
        var nam = parseInt(s, 10);
        out.value = CAN[(nam + 6) % 10] + " " + CHI[(nam + 8) % 12];
        loi.textContent = "";
        input.className = "";
        return;
    }
    input.className = "sai";
    input.focus();
}
document.getElementById("btnCanChi").addEventListener("click", tinhCanChi);
document.getElementById("namDL").addEventListener("keydown", function (e) {
    if (e.key === "Enter") tinhCanChi();
});
