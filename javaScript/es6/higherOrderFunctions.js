// map
const nums = [1,2,3,4,5,6,7,8]
const double = nums.map(num => num * 2);
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(double); // [2, 4, 6, 8, 10, 12, 14, 16]
console.log(sum); // 36

// filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8]   

// index
const fruits = ['apple', 'banana', 'cherry', 'date'];
const indexOfBanana = fruits.indexOf('banana');
console.log(indexOfBanana); // 1

// forEach
const colors = ['red', 'green', 'blue'];
colors.forEach(color => {
    console.log(color);
}); // red green blue