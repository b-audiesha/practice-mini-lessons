let cheeses = ["Brie", "Muenster", "Kraft American Singles", "Pepper Jack", "String", "Bleu de Gex"];

                        /*Let add cheddar to the end of our array.*/
cheeses.push("Cheddar");
console.log(cheeses);
console.log("cheeses.push(\"Cheddar\");    This added Cheddar to the Array")



console.log(`Now what happens here?.....This function will print all of the cheeses`)
/*function logTheCheeses() {
  cheeses.forEach(function (cheese) {
    console.log(cheese);
  })
}*/
/*console.log(cheeses);*/

/*logTheCheeses(); will giving you a printed list vs console.log giving you a one line array*/


                  /*add Gouda to the front of the array using unshift so example: cheeses.unshift("Gouda) */
console.log('add Gouda to the front of the array using   cheeses.unshift("Gouda"); ')
cheeses.unshift("Gouda");
console.log(cheeses);

/*logTheCheeses();*/

                          /*pass more than one argument through these two methods.*/

cheeses.push("Colby Jack", "White Cheddar", "Havarti"); /*this added to the end of the array*/
cheeses.unshift("Red Windsor", "Ragstone", "Nut Rebel"); /*this added to the beginning of the array*/
/*logTheCheeses();*/
console.log(cheeses);
/*
 New output = push ---> ["Red Windsor", "Ragstone", "Nut Rebel"], "Gouda", "Brie", "Muenster", "Kraft American Singles",
 "Pepper Jack", "String", "Bleu de Gex", "Cheddar", unshift---> ["Colby Jack", "White Cheddar", "Havarti"]
*/


                                      /*\Take away first and last elements */

/*remove an element from an array without reassigning the value, this will remove Red Windsor*/
cheeses.shift(); /*Takes away the first element of an array*/
console.log(cheeses);



cheeses.pop(); /*Takes away the last element of an array*/

// I never really like Havarti, let's axe that too.

cheeses.pop();

/*shift Ragstone from the array, again.*/

let removedCheese = cheeses.shift()
console.log(removedCheese + " Has been removed from cheeses array.");

/*add Ragstone back to the end of the array*/
cheeses.push(removedCheese);
/*logTheCheeses();*/
/*way for me to locate an index of an element in an
 array."*/


// Remember how with strings we were able to find the index of a pattern of characters?

// console.log(removedCheese.indexOf("o"));

// We can also use indexOf on arrays!

// console.log(cheeses.indexOf("Kraft American Singles"));
// console.log(cheeses.indexOf("Hot Dog"));

// Now I can locate the index of an element even if I'm not looking at it!

// We also have access to the lastIndexOf method.

var myFavNumbers = [17,34,22,17,19,17];

console.log(myFavNumbers.indexOf(17));
console.log(myFavNumbers.lastIndexOf(17));

/*slices doesnt change the original value, it copies and creates a new array.*/
let myFavCheese = cheeses.slice(cheeses.indexOf("Muenster"), cheeses.indexOf("Kraft American Singles") +1); /*(Must use the plus one to print 2 elements otherwise it will print only one)*/
/* if you are choosing something that is the index of a number, the starting point of zero makes it so that you need to add one.*/

/*If you console.log with one argument it will start at that index and return to the end. If you use two arguments, it will go from one to another.js
example */
let otherCheeses = cheeses.slice(7);

/*The following function will copy the array from start to finish.*/
function copyOfArray(array) {
  return array.slice();
}

/*reverse method changes the value of the array*/

let reversedCheeses = copyOfArray(cheeses).reverse();

/* or   cheeses.reverse();*/

/*logTheCheeses()*/

/*let reversedCheeses.forEach = function(cheese);
console.log(cheese);*/

/*
Sort will change the array and not make a copy*/

cheeses.sort();


                                  /*Changing a string into an array*/

let csvNames = "David,Casey,Justin,Cody The Duck";

let names = csvNames.split(",");

console.log(names);
/*The output is "David','Casey','Justin','Cody The Duck" it has become an array with "" around each element */

csvNames = names.reverse().join(","); /*takes each element into the array and puts them back into a string and seperates them by the comma.*/
console.log(csvNames);
/* The Output is "Cody the Duck,Justin,Casey,David"*/


                                      /*Joining Arrays together*/
let alphaTeam = ["David","Sophie","Daniel","Maggie","Cody"]
let goldTeam = ["Fer", "Justin","Zach","Casey E."]

let staff = alphaTeam.concat(goldTeam);
console.log(staff);
/*should output "David","Sophie","Daniel","Maggie","Cody","Fer", "Justin","Zach","Casey E."*/

                            /*removing one specific value from an array*/

function removedAtIndex(array,index) {
  let arr1 = array.slice(0,index);
  let arr2 = array.slice(index + 1);
  return arr1.concat(arr2)
}
console.log(cheeses,(cheeses.indexOf("Kraft American Singles")));
