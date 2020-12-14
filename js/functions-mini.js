function isShortWord(x) {
  return x.length < 5
}
console.log(isShortWord("awe"));

function isSameLength(str1,str2) {
  return str1.length == str2.length
}
console.log(isSameLength("hello","world"));
console.log(isSameLength("awkward","world"));

function getSmallerSegment(str,num) {
  return str.substring(num).toLowerCase()
}
console.log(getSmallerSegment("CHALLENGE",4));

