var gotJob = true;
var moneySaved = 50000;
var hasFlat = false;
var hasHouse = true;

// if (gotJob == true && moneySaved > 200000) {
//     console.log('Cholo biya kore feli!');
// }
// else {
//     console.log('tor kopale biya nai');
// // }
// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('Cholo biya kore feli!');
// }
// else {
//     console.log('tor kopale biya nai');
// }

// if (gotJob == true || moneySaved > 200000) {
//     console.log('Cholo biya kore feli!');
// }
// else {
//     console.log('tor kopale biya nai');
// }

if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('Cholo biya kore feli!');
}
else {
    console.log('tor kopale biya nai');
}

var hasCar = true;
var hasBari = false;
var hasJob = true;

if ((hasBari == true && hasCar == true) || hasJob == true) {
    console.log('alhamdulillah');
}
else {
    console.log('chirokumar hoye khakbo');
}