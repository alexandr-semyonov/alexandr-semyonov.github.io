function listAll(min, max) {
  var result = '';
  for (var i = min; i <= max; i++){
    result += i + ' ';
  }
  return result.trim();
}

function listBetweenDesc(min, max) {
  var result = '';
  for (var i = --max; min < i; i--){
    result += i + ' ';
  } 
  return result.trim();
}