/* 
Используй формулу: масса тела = 50 + 0,75 (Р – 150) + (В – 20) : 4, где Р — рост, а В — возраст в годах.
*/
 

var result = document.querySelector("#result");

function btnClick() {
  result.classList.add("result");
  var ageValue = document.querySelector("#age").value;
  var growthValue = document.querySelector("#growth").value;
  result.value = 50 + 0.75*(growthValue - 150) + (ageValue - 20);
}
