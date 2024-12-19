const myArray = []; 
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

myArray.push("school");

const lastItem = myArray.pop();

const len = myArray.unshift(42);

const first = myArray.shift();

console.log(len);
console.log(first);
console.log(lastItem);

console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);
console.log(myArray[5]);

myArray.splice(1, 1, 42);
console.log(myArray); 

const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
const newArr = arr.slice(2, 5);
console.log(newArr);

arr.reverse();
console.log(arr);

const newStr = myArray.join();
console.log(newStr);

const strArr = newStr.split(",");
console.log(strArr);

const A = ["A", "B", "C"];
const B = ["D", "E", "F"];
const joinArr = A.concat(B);
console.log(joinArr);

const newArray = [...A, ...B];
console.log(newArray);

const shelfA = ["A", "B", "C"];
const shelfB = ["D", "E", "F"];

const clothesA = ["1", "2", "3"];
const clothesB = ["4", "5", "6"];

const shelf = [shelfA, shelfB];
const clothes = [clothesA, clothesB];
const store = [shelf, clothes];
console.log(shelf[0][1]);
console.log(clothes[1][0]);
console.log(store[0][0][2]);