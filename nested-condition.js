var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 7;
var packedWell = false;
// if (danishPrice < myBudget) {
//     console.log('Danish kyeye danish jabo');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('Batarbon diye cha khabo');
// }
// else if (toastBiscuitPrice < myBudget) {
//     console.log('toastbiscuit khabo');
// }
// else {
//     console.log('bataha diye cha khabo');
// }

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('danish khabo');
    }
    else {
        console.log('danish khabo na.karon danish e maci boschse');
    }
}

// multi stage condition and nested condition
var mangoPrice = 200;
var orangePrice = 400;
var lichiPrice = 500;
var badamPrice = 20;
var myPocketBudget = 500;

if ((mangoPrice < myPocketBudget && mangoPrice > lichiPrice) || myPocketBudget < lichiPrice) {
    if (badamPrice == lichiPrice) {
        console.log('lichi kinbo');
    }
    else {
        console.log('onno jinis kinbo');
    }
}
else if (myPocketBudget > badamPrice && myPocketBudget == orangePrice) {
    if (badamPrice != orangePrice) {
        console.log('orange khabo');
    }
    else {
        console.log('another');
    }
}
else if (myPocketBudget > mangoPrice && myPocketBudget == badamPrice) {
    if (badamPrice == mangoPrice) {
        console.log('mango khabo');
    }
    else {
        console.log('another');
    }
}
else {
    console.log('onno bajare jabo');
}
