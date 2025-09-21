const person = {
    name: "Pippo",
    age: 48,
    city: "Milan"
}

for (let property in person) {
    console.log(`Property: ${property}`);
    console.log(`Property value: ${person[property]}`);
}


const arr2 = ["Phong", "Ngan", "Nguyen"];
for (let i in arr2) {
    console.log(i);
}

