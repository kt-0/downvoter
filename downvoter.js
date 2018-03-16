// variable finds every downvote element that has not yet been clicked and stores them as a list in an array
var buttonArr = document.getElementById("siteTable").getElementsByClassName("arrow down login-required access-required");

// when called, simulates a click on parameter 'd', which means it needs to be a 'clickable' element, like button, radio, etc.
function autoDownVote(d){
    d.click();
}

/* RNG function from:
** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// generates and returns random number between range 'a' and 'b', which are parameters passed
function randomNumGen(a, b) {
  var min = Math.ceil(a);
  var max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// initialized (i)ndex and 'len' increment values
var i = 0, len = buttonArr.length;

//self invoking function which calls 
(function myLoop (i) {          
   setTimeout(function () {
      autoDownVote(buttonArr[0]);   // this function must be called with index value equal to zero, because after each click, the array elements are dynamically removed                  
      if (--i) myLoop(i); //decrement i and call myLoop again if i>0
   }, randomNumGen(500, 5000) ) // delays .5 to 5 seconds ('randomly')
})(len); // number of iterations as an argument
