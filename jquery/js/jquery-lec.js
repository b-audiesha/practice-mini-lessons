/* console.log($);*/

/*normal vanilla JS*/
/*window.onload = function() {
  alert("ding,fries are done");
}*/

/*jquery of the same function*/
/*
$(document).ready(function() {
  alert("I gotta run! I gotta run!");
});*/


/*normal vanilla JS*/
/*document.getElementById("ipsum").style.background = "palevioletred";*/
/*jquery of the same function*/
/*$(document).ready(function() {
  $("#lorem").css("background", "skyblue");*/


/*document.getElementById("dolar").innerHTML = ":)";* avoid using element selector unless you wanna apply all of the same styles to elements across the page/


/*jQuery to change the color and font type */
$(document).ready(function() {
$("#lorem").css("background", "skyblue");
$(".filler-text").css("font-family", "sans-serif" )
$("h1").html("Howdy Howdy Fellas !") /*changes h1's to new sentence'*/
$("#flex-box, #flexier-box").css("display", "flex"); /*display flexes*/
  $("*").css("visibility", "none");
});

/*adding notes on events*/

// window.onload = function() {
//     alert("Ding fries are done!");
// }
//
// $(document).ready(function() {
//     alert("I gotta run I gotta run");
// });

// document.getElementById("ipsum").style.background = "palevioletred";

/*
var texts = Array.from(document.getElementsByClassName("filler-text"));

texts.forEach(function (text) {
  text.style.color = "red";
});

document.getElementById("dolor").innerHTML = ";)";


$(document).ready(function () {
  $("#ipsum").css("background", "skyblue");
  $(".filler-text").css("font-family", "sans-serif");
  $("h1").html("Howdy Goobers! Let's learn about jQuery Selectors, y'all.");
  $("#lorem, #ipsum, #dolor, h1").css('font-size', '2em').css("display", "block");
  $("#flex-box, #flexier-box").css("display", "flex");
  $("*").css("display", "none");

});

*/
