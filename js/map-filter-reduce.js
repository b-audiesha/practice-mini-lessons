let numArr = [1, 2, 3, 4, 5, 6];

let mappedNumArr = numArr.map(function (num) {
  return num + num;
})

console.log(numArr); //returns original array
console.log(mappedNumArr); //this logs a new array [2,4,6,8,10,12]

// TODO: create an array of numbers (of your choosing). Using map() multiply each number by
//  itself then add that number to the next, returning each value
// let numArray=[3,6,9,12,15,18,21]
// let arrayMap = numArray.map(function(number) {
//    return number * number;
// })
//
// console.log(numArray);
// console.log(arrayMap);

let names = [
  'Audi Marie',
  'Kyle Patrick',
  'Dallas Ryan',
  'Austin Lawrence'
];
 let middleName = names.map(function (name) {
   return name.split(' ')[1]; // 0 is first name, 1 is middle
 });
 console.log(middleName);

/* string array to object array and back to string array   string[] => object[] =>string[] for each iteration return new object that splits their names.\*/
let nameObjs = names.map(function (name){
  let nameArr = name.split(' ');
  return {
    firstName: nameArr[0],
    middleName: nameArr[1]}
});
console.log(nameObjs);

let lastNames = nameObjs.map(function (name){
  return name.middleName;
});
console.log(middleName);


//object to object mapping


 let pets = [
   {
     name: 'Lucy',
     breed:'French Bulldog',
     age:'7 months',
     nickname:'Lucy Goose'
   },
   {
     name:'Blue',
     breed:'English Bulldog',
     age:'deceased',
     nickname:'Old Mighty Blue'
   }
 ];
 let dogs = pets.map(function (dog){
   return {
     name:dog.name,
     breed:dog.breed,
     nickname:dog.nickname,
     isGoodDog: true
   }
 });
 console.log(dogs);

// TODO: create an array of names of differing name counts and lengths

let brattinNames = [
  'Audiesha Brattin',
  'Kyle Brattin',
  'Dallas Brattin',
  'Austin Brattin'
];


// TODO: map to a new array of names, where the names are reversed last-first

let nameObject = brattinNames.map(function (name){
  let nameArr = name.split(' ');
  return {
    firstName: nameArr[0],
    lastName: nameArr[1]
  }
});
console.log(nameObject);

// TODO: with that new array, use jQuery to append each of the new array elements to the DOM
// TODO: feel free to incorporate styling
// TODO: it may be helpful to prepend the names rather than append

let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let thirdNums = numArr.filter(function (name){
  //must return a boolean value

});

let allPets = [
        {
            name: 'Coda',
            species: 'Dog',
            breed: 'GSD',
            age: "Never ask a lady..",
            nickname: 'Horsie'
        },
        {
            name: 'Murphy',
            species: 'Dog',
            breed: 'Great Pyrenees / Lab',
            age: '9 mo',
            nickname: 'Murf'
        },
        {
            name: 'Sir Walter',
            species: 'Succulent',
            breed: 'Many',
            age: '7 Months',
            nickname: 'Chew Toy'
        }
    ];

const result = allPets.filter(allPets => allPets.species == 'Dog');
console.log(result);
//This prints an array of Dog objects only

let numbArr = [1, 2, 3, 5, 8, 13, 21];
let sum = numbArr
  .reduce(function (accumulator, currentValue){
    return accumulator + currentValue;
  }, 10
    );
console.log(sum);
// This prints 63

let stringArr = ['Audiesha','Marie','Perry','Brattin'];
let fullName = stringArr
.reduce(function (accumulator,currentValue){
  return accumulator + ' ' + currentValue;
});
console.log(fullName);
// this prints Audiesha Marie Perry Brattin

let nameStrings =[
  'Brian Burkheiser',
  'Eric VanlerBerghe',
  'Spencer Charnas',
  'Corey Taylor',
  'Courtney LaPlante'
];

let namesArr = nameStrings.map(function(name){
  return name.split(' ');
});
console.log(namesArr);
// this prints nameStrings as separate arrays
//0: (2) ["Brian", "Burkheiser"]
//1: (2) ["Eric", "VanlerBerghe"]
//2: (2) ["Spencer", "Charnas"]
//3: (2) ["Corey", "Taylor"]
//4: (2) ["Courtney", "LaPlante"]
