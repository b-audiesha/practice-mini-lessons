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
document.getElementById("ipsum").style.background = "palevioletred";

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

