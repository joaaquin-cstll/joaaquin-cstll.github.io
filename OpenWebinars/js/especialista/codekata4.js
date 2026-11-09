let fruits = ["Orange", "Lemon", "Grape"];
let myOptions = ["Watermelon", "Banana"];

for (let elem of fruits) {
    if (myOptions.has(elem)) {
        console.log(elem);
        break;
    } else {
        console.log(elem);
        continue;
    }
}