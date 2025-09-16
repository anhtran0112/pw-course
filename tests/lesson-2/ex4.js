/*Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
Như vậy, nếu bạn cao 1,7m, tức 170cm thì :
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
Cân nặng tối đa là: 70kg
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg

a. Khai báo chiều cao của bạn (cm)
b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.
*/

let chieucao = 175;
let cannanglytuong = chieucao % 100 * 9 / 10;
let cannangtoida =  chieucao % 100;
let cannangtoithieu =  chieucao % 100 * 8 / 10;
console.log("Cân nặng lý tưởng: " , cannanglytuong , ", Mức cân tối đa: " , cannangtoida , ", Mức cân tối thiểu: " , cannangtoithieu);

