// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiplication(a, b) {
    return a*b;
    //console.log(a * b);
}
console.log(multiplication(5, 4));

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
function findMin(a, b, c) {
    if (a <= b && a <= c) {
        console.log(`Số nhỏ nhất là:`, a);
    }
    else if (b <= a && b <= c) {
        console.log(`Số nhỏ nhất là:`, b);
    }
    else {
        console.log(`Số nhỏ nhất là:`, c);
    }
}
findMin(8, 7, 1);

// 3. Viết hàm getTopStudents nhận 2 tham số:
// ● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
// ● threshold: ngưỡng điểm để được coi là "top" (số).
// Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
// Gọi hàm với danh sách thực tế và in kết quả.
const listStudents = [
    { name: "Nguyen Van A", score: 89 },
    { name: "Nguyen A", score: 79 },
    { name: "Le Van A", score: 56 },
    { name: "Le Viet N", score: 92 },
    { name: "Ung Ngoc B", score: 77 },
    { name: "Tran Le V", score: 68 },
    { name: "Tran Thai S", score: 93 },
    { name: "Nguyen Thi V", score: 79 },
    { name: "Le Minh", score: 59 },
    { name: "Le Viet C", score: 92 },
    { name: "Ngoc B", score: 97 },
    { name: "Leonardo", score: 88 }
]
const threshold = 90;
function getTopStudents(listStudents,threshold){
    let listTopStudents =[];
    for (let i = 0; i < listStudents.length; i++)
    {
        if(listStudents[i].score>=threshold){
            listTopStudents.push(listStudents[i].name);
        }
    }
    return listTopStudents;
}
let listTopStudents = getTopStudents(listStudents,threshold);
console.log(`Danh sách học sinh có điểm trên`, threshold);
for (let j = 0; j < listTopStudents.length; j++) {
    let sequenceNumber = j + 1;
    let studentName = listTopStudents[j];
    
    console.log(sequenceNumber + ". " + studentName);
}

// 4. Viết hàm calculateInterest nhận 3 tham số:
// ● principal: số tiền gửi ban đầu (số).
// ● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
// ● years: số năm gửi.
// Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và in kết quả.

function calculateInterest(){

}

