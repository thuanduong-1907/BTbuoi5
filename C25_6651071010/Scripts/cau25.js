// Câu 25: Tính tiền các món ăn
var THUC_AN = [
    ["Bún bò", 20000], ["Hủ tiếu", 18000], ["Bánh canh", 17000], ["Phở bò", 19000],
    ["Nuôi", 15000], ["Bánh mì thịt", 12000], ["Bánh cuốn", 15000]
];
var NUOC_UONG = [
    ["Cà phê đá", 12000], ["Cà phê sữa đá", 15000], ["Chanh dây", 13000], ["Chanh muối", 12000],
    ["Xí muội", 14000], ["Sữa tươi", 13000], ["Cam vắt", 17000]
];

function napDanhSach(idSelect, ds, chonSan) {
    var sel = document.getElementById(idSelect);
    for (var i = 0; i < ds.length; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.textContent = ds[i][0];
        if (chonSan.indexOf(i) !== -1) opt.selected = true;
        sel.appendChild(opt);
    }
}
function layMonDaChon(idSelect, ds) {
    var sel = document.getElementById(idSelect), kq = [];
    for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].selected) kq.push(ds[parseInt(sel.options[i].value, 10)]);
    }
    return kq;
}
function tinhTien() {
    var mon = layMonDaChon("thucan", THUC_AN).concat(layMonDaChon("nuocuong", NUOC_UONG));
    var o = document.getElementById("hoadon");
    if (mon.length === 0) {
        o.innerHTML = '<span class="loi">Vui lòng chọn ít nhất một món!</span>';
        return;
    }
    var tong = 0;
    var html = '<table class="hoadon"><tr><th>Các món đã dùng</th><th>Tiền</th></tr>';
    for (var i = 0; i < mon.length; i++) {
        html += "<tr><td>" + mon[i][0] + "</td><td>" + mon[i][1] + "</td></tr>";
        tong += mon[i][1];
    }
    var ban = document.querySelector('input[name="thoidiem"]:checked').value;
    if (ban === "dem") {
        var phuThu = tong * 0.1;
        html += "<tr><td>Phụ thu ban đêm (10%)</td><td>" + phuThu + "</td></tr>";
        tong += phuThu;
    }
    html += "<tr><td>Tổng tiền</td><td>" + tong + " đồng</td></tr></table>";
    o.innerHTML = html;
}
napDanhSach("thucan", THUC_AN, [0, 4]);        // mặc định: Bún bò, Nuôi
napDanhSach("nuocuong", NUOC_UONG, [0, 2]);    // mặc định: Cà phê đá, Chanh dây
document.getElementById("btnTinhTien").addEventListener("click", tinhTien);
