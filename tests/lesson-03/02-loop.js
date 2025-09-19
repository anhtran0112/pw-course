//1. Tính tổng từ 1 đến 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(`Tổng từ 1 đến 100 =`, sum);


//2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`Bảng cửu chương`, i, `x`, j, `=`, i * j);
    }
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let mangSoLe = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 != 0) {
        mangSoLe.push(i);
    }
}
console.log(mangSoLe);

/*4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com).*/
function taoDanhSachEmail(tenNguoiDung, tenMien, soLuong) {
    let danhSachEmail = [];
    for (let i = 0; i < soLuong; i++) {
        // Chọn ngẫu nhiên một tên người dùng từ mảng
        let viTriNgauNhien = Math.floor(Math.random() * tenNguoiDung.length);
        let tenNgauNhien = tenNguoiDung[viTriNgauNhien];
        // Chọn ngẫu nhiên một tên miền từ mảng
        viTriNgauNhien = Math.floor(Math.random() * tenMien.length);
        let mienNgauNhien = tenMien[viTriNgauNhien];
        let emailMoi = tenNgauNhien + mienNgauNhien;
        danhSachEmail.push(emailMoi);
    }
    return danhSachEmail;
}
let danhSachNguoiDung = ["thanhle", "hungnguyen", "hongngoc", "chauphan", "anhtran", "tuando"];
let danhSachTenMien = ["@hotmail.com", "@yahoo.com", "@aol.com", "@msn.com"];
let danhSachEmail = taoDanhSachEmail(danhSachNguoiDung, danhSachTenMien, 10);
console.log("Danh sách 10 email");
// Duyệt qua mảng email
for (let i = 0; i < danhSachEmail.length; i++) {
    let soThuTu = i + 1;
    // Lấy email thứ i
    let email = danhSachEmail[i];
    console.log(soThuTu + ". " + email);
}

/*5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100}*/

const doanhThu = [
    { "month": 1, "total": 150 },
    { "month": 2, "total": 210 },
    { "month": 3, "total": 130 },
    { "month": 4, "total": 220 },
    { "month": 5, "total": 250 },
    { "month": 6, "total": 700 },
    { "month": 7, "total": 680 },
    { "month": 8, "total": 320 },
    { "month": 9, "total": 330 },
    { "month": 10, "total": 400 },
    { "month": 11, "total": 380 },
    { "month": 12, "total": 220 }
];
let tongDoanhThu = 0;
for (let f = 0; f < doanhThu.length; f++) {

    tongDoanhThu += doanhThu[f].total;
}
console.log(tongDoanhThu);