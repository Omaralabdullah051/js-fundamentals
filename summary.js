var tableLength = 12;
var tourDestination = ['coxsbazar', 'nepal', 'vutan', 'paris'];
console.log(tourDestination.length);
console.log(tourDestination.indexOf('vutan'));

var fouthDestination = tourDestination[3];
tourDestination[1] = 'srilanka';
tourDestination.push('london');
tourDestination.pop();
tourDestination.unshift('mumbai');
tourDestination.shift();

if (tourDestination[1] == 'nepal') {
    console.log('phare ahare ahare');
}
else if (tourDestination[1] == 'chaina') {
    console.log('chaina tor kache jamuna');
}
else if (tourDestination.length == 4) {
    console.log('aro taka ache aro beshi ghurmu')
}
else {
    console.log('kothai jamuna basay thakmu ar khali mosha marmu');
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami dim khamu');
}
if (eggPrice >= myBudget) {
    console.log('lebu diye vat khabo');
}