/*1
Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
year=2021. Sau đó in ra năm sản xuất của xe.
*/

const car = {
  makeBy: 'Toyota',
  model: 'Corolla',
  year: '2021',
};

console.log(car.year);

/*2
Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
year=2021. Sau đó in ra năm sản xuất của xe.
*/

const person = {
  name: 'Anh',
  address: {
    street: 'Truong Chinh',
    city: 'Ho Chi Minh',
    country: 'Viet Nam',
  },
};

console.log(person.address.street);

/*3
Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
object với 2 thuộc tính kiểu number: math và english
*/

const student = {
  name: 'Anh',
  grades: {
    math: '6',
    english: '7',
  },
};

console.log(student.grades.math);

/*4
Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
volume, brightness. Thay đổi volume và in ra object mới.
*/
const setting = {
  volumn: 78,
  brightnesses: 20,
};
setting.volumn = 45;
console.log(setting.volumn);

/*5
Tạo một object bike và sau đó thêm thuộc tính color vào object đó
*/
let bike = {};
bike.color = 'red';
console.log(bike);

/*6
Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi
object này
*/
let employee = {
  emp_name: 'Tran Van B',
  age: '25',
};
delete employee.age;
console.log(employee);

/*7
Một trường học có các lớp học và học sinh như sau:
○ classA: An, Bình, Châu
○ classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
tên các học sinh
*/
const school = {
    classA: ["Hung","An","Binh"],
    classB: ["Dao","Hoang","Giang"]
}

console.log(school.classA , school.classB);