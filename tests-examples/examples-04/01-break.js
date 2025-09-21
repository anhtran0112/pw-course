// Viết vòng lặp in ra giá trị i
// i lặp từ 10 -> 20
// Dừng lại nếu gặp phần từ đầu tiên chia hết cho 3

for (let i = 10; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
        break;
    }
}
