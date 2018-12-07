/* 
Используй формулу: масса тела = 50 + 0,75 (Р – 150) + (В – 20) : 4, где Р — рост, а В — возраст в годах.
*/

var result = document.querySelector("#result");
var form = document.querySelector("form");

function btnSubmit() {
  var ageValue = document.querySelector("#age").value;
  var growthValue = document.querySelector("#growth").value;
  if (ageValue && growthValue) {
    result.classList.add("result");
    var idealWeight = calculateIdealWeight(ageValue, growthValue);
    var correctResult = idealWeight + ' кг.';
    var incorrectResult = 'Пожалуйста правильность данных';
    if (idealWeight > 0) {
      result.value = correctResult;
    } else {
      result.value = incorrectResult;
    }
  }
}

//function chechCorrectEntry(){
//  
//}

function calculateIdealWeight(age, growth) {
  return Math.floor(50 + 0.75 * (growth - 150) + (age - 20));
}

function btnReset() {
  result.classList.remove("result");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  btnSubmit();
});