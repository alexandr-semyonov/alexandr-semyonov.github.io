function makeThreePoint(str){
  return str.length > 20 ? str.substr(0, 20) + ' ...' : str
}

console.log(makeThreePoint('Short message'));
console.log(makeThreePoint('123456789012345678901234567890'));