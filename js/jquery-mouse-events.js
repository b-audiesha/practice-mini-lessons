/*Turns Jumbotron Blue with CLick*/

// ==========================  addEventListener()

// (function(){
//
//     //get the target
//     let jumbotron = document.querySelector("div.jumbotron");
//
//     //define the listener
//     let listener = function(){
//         jumbotron.style.backgroundColor = 'blue';
//         jumbotron.querySelector("#main-title").innerText = "DOM DOM DOM DOMMMMMMMM";
//     }
//
//     //bind the event, target, listener together
//     jumbotron.addEventListener("click", listener);
//
// })()

(function () {
  let jumbotron = $('div.jumbotron');
  let handler = function (event /*or e*/) {
    $(this) /*= div.jumbotron*/.css('background', 'blue');
  }
  jumbotron.click(handler);
})();
// ========================= Mouse events ===============================
//

// document.addEventListener('click', function(e){
//     console.log(e.target);
// });


// $(document).click(function(e){
//     console.log(e.target);
// })


// ************** Get an element and change style on click ****************

// (function(){
//
//     let jumbotron = $('div.jumbotron');
//     let handler = function(event){
//         $(this).css('background-color', 'blue');
//         console.log('event fired');
//     }
//     jumbotron.click(handler);
//
// })()


// ************** Get elements and change style on click *************

// (function(){
//
//     let tableRows = $('tbody > tr');
//
//     let handlerBlueBGnd = function(){
//         tableRows.css('background-color', '');
//         $(this).css('background-color', 'lightblue');
//     }
//
//     tableRows.click(handlerBlueBGnd);
//
// })()

/*turns table row blue*/
(function () {
  let tableRows = $('tbody > tr');
  tableRows.css('background-color', '');
  let handlerBlueBGnd = function () {
    $(this).css('background-color', 'light-blue');
  }
  tableRows.click(handlerBlueBGnd);
})();

/*playing with hovers*/
(function () {
  let jqClassObjects = $('.hover');
  let handlerBlueBGnd = function () {
    $(this).css({
      backgroundColor: 'red',
      transition: 'background .5s'
    })
  };
  let handlerNormalBGnd = function (e) {
    $(this).css('background-color', "")
  }

  jqClassObjects.hover(handlerBlueBGnd, handlerNormalBGnd);
})();


(function () {
  let jqClassObjects = $('.jqclass');
  let handlerBlueBGnd = function () {
    $(this).css({
      backgroundColor: 'red',
      transition: 'background .5s'
    })
  };
  let handlerNormalBGnd = function (e) {
    $(this).css('background-color', "")
  }

  jqClassObjects.hover(handlerBlueBGnd, handlerNormalBGnd);
})();

/*Click events*/


(function () {
  let jqElements = $('.click');
  let backgroundBlue = "lightblue";
  let backgroundReset = ''

  function addClickEvents(elementsToBind) {
    let handlerBlueBckGnd = function () {
      elementsToBind.css('background-color', backgroundReset);
      $(this).css("background-color", backgroundBlue);
    }
    elementsToBind.click(handlerBlueBckGnd);
  }

  addClickEvents(jqElements);
})();

// ************ More dynamic background changes on click or hover *****************
(function(){
  let jqElements = $('.jqClass');
  let backgroundBlue = 'lightblue';
  let backgroundReset = '';

  function addClickEvents(elementsToBind){
    let handlerBlueBckGnd = function(){
      elementsToBind.css('background-color', backgroundReset);
      $(this).css('background-color', backgroundBlue);
    }
    elementsToBind.click(handlerBlueBckGnd);
  }

  addClickEvents(jqElements);

})()

/*Keyboard Events*/

$('input').keyup(function(e){
  console.log(this.value);
  if(this.value=== "Audi") {
    alert("May I grant you three wishes ?")
  }
})
