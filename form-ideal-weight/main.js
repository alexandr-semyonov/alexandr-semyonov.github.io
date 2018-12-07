/* 
Используй формулу: масса тела = 50 + 0,75 (Р – 150) + (В – 20) : 4, где Р — рост, а В — возраст в годах.
*/
 
var result = document.querySelector("#result");
var form = document.querySelector("form");

function btnSubmit() {
  var ageValue = document.querySelector("#age").value;
  var growthValue = document.querySelector("#growth").value;
  if (ageValue && growthValue){
    result.classList.add("result");
    idealWeight = Math.floor( 50 + 0.75*(growthValue - 150) + (ageValue - 20) );
    if (idealWeight > 0){
    result.value = idealWeight + ' кг.';
    } else {
      result.value = 'Пожалуйста правильность данных';
    }
  }
}

function btnReset(){
  result.classList.remove("result");
}

form.addEventListener("submit", function(event){  
      event.preventDefault();
      btnSubmit();
});