// Câu 22: Form nhập 2 số nguyên - nhân / chia
function layHaiSo() {
    var s1 = document.getElementById("so1").value.trim();
    var s2 = document.getElementById("so2").value.trim();
    var re = /^-?\d+$/;
    if (!re.test(s1) || !re.test(s2)) {
        return null;
    }
    return [parseInt(s1, 10), parseInt(s2, 10)];
}
function hienKetQua(text, laLoi) {
    var kq = document.getElementById("ketqua");
    kq.textContent = text;
    kq.className = laLoi ? "loi" : "";
}
function nhan() {
    var so = layHaiSo();
    if (so === null) { hienKetQua("Vui lòng nhập hai số nguyên hợp lệ!", true); return; }
    hienKetQua(so[0] * so[1], false);
}
function chia() {
    var so = layHaiSo();
    if (so === null) { hienKetQua("Vui lòng nhập hai số nguyên hợp lệ!", true); return; }
    if (so[1] === 0) { hienKetQua("Không thể chia cho 0!", true); return; }
    hienKetQua(Math.round(so[0] / so[1] * 10000) / 10000, false);
}
document.getElementById("btnMultiply").addEventListener("click", nhan);
document.getElementById("btnDivide").addEventListener("click", chia);
