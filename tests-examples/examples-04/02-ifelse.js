
let soYeuTHich = 12;

if (soYeuTHich % 2 === 0) {
    console.log("So yeu thich la so chan");
}
else {
    console.log("So yeu thich la so le");
}


//Khai báo biến thứ trong tuần

const mangThu = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i <= mangThu.length; i++) {
    if (mangThu[i] === 1) {
        console.log("Thứ 2");
    }
    else if (mangThu [i] === 2) {
        console.log("Thứ 3");
    }
     else if (mangThu[i] === 3) {
        console.log("Thứ 4");
    }
    else if (mangThu[i] === 4) {
        console.log("Thứ 5");
    }
    else if (mangThu[i] === 5) {
        console.log("Thứ 6");
    }
    else if (mangThu[i] === 6) {
        console.log("Thứ 7");
    }
    else if (mangThu[i] === 7) {
        console.log("Chủ nhật");
    }
}



const mangThu2 = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < mangThu.length; i++) {
    const thu = mangThu[i];
    const tenThu = 
        thu === 1 ? "Thứ 2" :
        thu === 2 ? "Thứ 3" :
        thu === 3 ? "Thứ 4" :
        thu === 4 ? "Thứ 5" :
        thu === 5 ? "Thứ 6" :
        thu === 6 ? "Thứ 7" :
        thu === 7 ? "Chủ nhật" : "Không xác định";
    
    console.log(tenThu);
}