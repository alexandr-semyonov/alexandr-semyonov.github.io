function checkSpam(str){
  if (str.search(/spam/i) > 0 || str.search(/sex/i) > 0){
    alert('In string ' + str + '\nSpam detected');
  } else {
    alert('In string ' + str + '\nAll clear))');}
}




checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false