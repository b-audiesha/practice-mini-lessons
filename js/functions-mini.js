function isShortWord(x) {
  return x.length < 5;
}
console.log(isShortWord("awe"));

/*_________________________________________________________*/

function isSameLength(str1,str2) {
  return str1.length == str2.length;
}
console.log(isSameLength("hello","world"));
console.log(isSameLength("awkward","world"));

/*_________________________________________________________*/

function getSmallerSegment(str,num) {
  return str.substring(num).toLowerCase();
}
console.log(getSmallerSegment("CHALLENGE",4));


/*_________________________________________________________*/

var x= 300;
var y= 100;

function scopeExample(x,y) {
  var x = 1;
  var y = 2;
  console.log('x: '+ X + "y" + y);
}


/*_________________________________________________________*/
var word = 'hello';

function shoutWord () {     /*pure function this does not change the global variable*/
  return word.toUpperCase();
}

function changeWord() {
  word = 'fred';  /*This changes the global variable word will have value of Fred from this point on*/
}
/*_________________________________________________________*/
/*
Higher Order Functions*/

function returnFive() {  /*returns function as argument*/
  return 5;
}

function addTwo(number) {  /*can return a function as output or argument*/
  return number() +2;
}

console.log(addTwo(returnFive())); /*callback function "returnFive is passed as add to"*/
console.log(addTwo(function () {
  return 10;
}))

/*
 ^^ This function returns ten plus "add two" it should return 12*/

/*_________________________________________________________*/
/*IIFE - immediatly invoked function is a container for variables and functions for Javascript, I can access it in the console.
Also keeps from having word conflicts is not accessabke except for inside of the function*/

  (function() {
    "use strict";

    function hello() {
      alert("HI!!");
    }

    var audi = "bob";
  })();

(function() { /*anonyumus function*/
})();
/*()();*/ /*the start of an IIFE*/
