const hello = (name) => {
    return "Hello", name;
}

console.log(hello("Anh"));

const calculateTotal = (price, quantity, discount) => {
    return price * quantity - discount;
};

console.log(calculateTotal(100, 4, 10));


// Biến thể Lambda
const hello2 = name => `Hello, ${name}!`;
console.log(hello2("Anh"));
