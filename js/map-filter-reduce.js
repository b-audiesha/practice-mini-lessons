let numArr =[1,2,3,4,5,6];

let mappedNumArr = numArr.map(function(num) {
return num + num;
})

console.log(numArr); //returns original array
console.log(mappedNumArr); //this logs a new array [2,4,6,8,10,12]
