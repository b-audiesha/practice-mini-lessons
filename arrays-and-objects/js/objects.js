/*
- What is a JS object?
  - What is the practical difference between these two statements?
  someObject.someProperty = 4;
someObject[‘someProperty’] = 4;
- Are JS objects mutable?
  - Given the following code, what will be logged and why?
var objA = {a: 1, b: 2};
var objB = objA;
objA.a = 7;
console.log(objB.a);
- Is it possible to nest another object inside of an object?
  - Is it possible to nest an array in an object?
  - What does ‘this’ refer to within an object method in JS?*/
/*Create a few beverage objects and assign values to each object for the following properties:
  - brandName
  - type
  - volumeInLiters
  - priceInCents
  - expirationDate
  - datesOfPreviousSips (use an array of strings)
- isOpen
Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.*/


let beverages = [
  { id: 1, name: 'Monster', type: 'Energy Drink', priceInCents: 499, valueInDollars: 4.99,datesOfPreviousSips:'yesteryear', isOpen: 'Yes'},
  { id: 2, name: 'Redbull', type: 'Energy Drink', priceInCents: 599, valueInDollars: 5.99,datesOfPreviousSips:'yesteryear', isOpen: 'No'},
  { id: 3, name: 'Coffee', type: 'Natural Caffeine', priceInCents: 100, valueInDollars: 1.00,datesOfPreviousSips:'yesteryear', isOpen:'Yes'},
  { id: 4, name: 'Rockstar', type: 'Energy Drink', priceInCents: 499, valueInDollars: 4.99,datesOfPreviousSips:'yesteryear', isOpen: 'Yes'},
  { id: 5, name: 'Mountain Dew', type: 'Soda', priceInCents: 199, valueInDollars: 1.99,datesOfPreviousSips: 'yesteryear',isOpen: 'No'}
];
