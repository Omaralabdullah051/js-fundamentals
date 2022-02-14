var books = ['hablu', 'bolod', 'choddogusti', 'battery', 'peracitamol', 'gymnasium'];

var batteryIndex = books.indexOf('battery');
console.log(batteryIndex);

var numbers = [53, 44, 39, 87, 57];
var index = numbers.indexOf(44);
console.log(index);

var secondIndex = books[3];
console.log(secondIndex);
console.log(numbers);
numbers[1] = 95;
numbers[4] = 60;
console.log(numbers);


var bookNames = ['sokira', 'bokire', 'mokira', 'zokira', 'fokira', 'korika', 'horika'];
console.log(bookNames.indexOf('sokira'));
console.log(bookNames.indexOf('korika'));
var book2 = bookNames[2];
console.log(book2);
var book5 = bookNames[5];
console.log(book5);

bookNames[1] = 'korima';
console.log(bookNames);