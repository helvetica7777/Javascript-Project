var form = document.forms[0].elements;
var submit = document.querySelector("#submit");
// submit.disabled = true;
//
// form.quantity.addEventListener("change", function() {
//   if ((form.quantity.value>=1) &&(form.quantity.value<=100)){
//     	submit.disabled = false;
//   }
//   else{
//     submit.disabled = false;
//   }
// }, false);

var numberEl = document.querySelector("section:last-child p:first-of-type span");
var countEl = document.querySelector("section:last-child p:nth-of-type(2) span");
var compareEl = document.querySelector("section:last-child p:nth-of-type(3) span");
var finalEl = document.querySelector("section:last-child p:nth-of-type(4) span");
submit.disabled=true;
form.quantity.addEventListener("change", function() {
  var number = form.quantity.value;
    if( number <= 0 || number > 100 ) {
       submit.disabled=true;
    }
    else{
      submit.disabled=false;
    }
}, false);


var goal=Math.floor(Math.random() * 100) + 1;
var count=0;
var guessed=[];
function compareNumber(number) {
   if (number<goal){
     return "You are too small!";
   }
   else if (number>goal){
     return "You are too big!";
   }
   else {
     document.getElementById("submit").style.display = 'none';
     return "You guess the right number!";

   }
}
function countTimes(){
  count++;
}
function finalSentence(number,goal,array){
  if (number==goal){
    switch (true){
      case (count<2):
        return "You must be very lucky!";
        break;

      case(count<8):
        return "Are you a Math genius?";
        break;

      case(count<20):
        return "You did a great job!";
        break;

      case(count<50):
        return "I know, it's only bad luck!";
        break;

      case(count=100):
        return "I admire you, in many ways.";
        break;

      default:
        return "That's a lot of click, right?"
        break;
    }
  }
  else if (array.indexOf(number) !== (array.length-1)){
    return "Aha! You have tried this number before!";
  }
  else{
    return "";
  }
}
submit.addEventListener("click", function() {
  event.preventDefault();
  countTimes();
  guessed.push(form.quantity.value);
	numberEl.textContent = form.quantity.value;
	countEl.textContent = count;
	compareEl.textContent = compareNumber(form.quantity.value);
  finalEl.textContent = finalSentence(form.quantity.value,goal,guessed);
}, false);

reset.addEventListener("click", function() {
	numberEl.textContent = "";
	countEl.textContent = "";
	compareEl.textContent = "";
	finalEl.textContent = "";
  count=0;
  goal=Math.floor(Math.random() * 100) + 1;
  guessed=[];
  document.getElementById("submit").style.display = 'initial';
}, false);
