/* array literal = console.log([1,2,3,4,5,6,7,8,9].length)*/
/*console.log([1,2,3,][0]) this is indexing the array at 0
console.log([variable[0]]) will return first value
console.log([variable][9]) if there is nothing at 9, it will return undefined or testArray[""]*/

let instructor = ['David,Justin,Casey,Cody The Duck'];

let randomIndex = Math.floor(Math.random() * instructor.length);
alert("One of your instructors is named: " + instructor[randomIndex]); /*This gives you a randomized instructor from the instructors array.*/
/*Math.random will give you a number between 0 and 1*/
console.log('Howdy ' + instructor); /*= Howdy, David,Justin,Casey...*/

/*How to access all the elements of the array*/

for (let i = 0; i < instructor.length; i++ ){
  console.log("One of your instructors is named :" + instructor[i]);
}
/*using .length will iterate threw all of the array, runs the entire length.*/

/*
for ( let k = 0; k<= instructors.length; i ++){
  console.log("One of your instructors is named :" + instructors[i]);

}
*/

/*the less than or equal to creates an undefined value since an array begins at 0*/

/*function testAllForFalsy(array) {
  for (let j = 0; j < array.length; j++){
    if(array[j]) {
      alert('Truthy value detected at the index: ' +j);
      return j
    }
  }
  alert('All values of array are falsy. ');
  return -1;
}*/

/*For each loop to iterate threw array...->*/

/*arrayOfSorts.forEach(function(element, index,array){
  ***Do things Here (index and array are not mandatory and do not have to be apart of the anonymous callback function ***
})*/
/*element(what we are accessing)//(index point)(requires the second but represents array itself)*/

instructor.forEach(function(instructor,index, array) {
  if (index % 2 !== 0){
    console.log('Instructor # ' + (index + 1) + 'of' + array.length + 'is named:' + instructor )
  }
});
/*or the simplified version is*/

instructor.forEach(function(instructor) {
  console.log('One of your instructors names are :' + instructor)
});
/* if the index is not divisible by 2 then console.log every even instructor...(every other instructor)*/

let numbers = [17,22,34,52,6];

numbers.forEach(function(number, index) {
  if(index % 2 === 0) {
    console.log(number * 2); /*this took every even indexed number and multiplied that number times two*/
  }
});

/*
refactor to for loop and access every other element instead of every element
*/

for(let y = 0; y < numbers.length; y += 2) {
  console.log(numbers[y] * 2);
}
