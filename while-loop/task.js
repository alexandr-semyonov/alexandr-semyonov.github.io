// use: while loop
// don't use: *, / and %
function getReminder(dividend, divider) {
  while (dividend >= divider){
    dividend = dividend - divider;
  }
  return dividend;
}

// use: while loop
// don't use: *, / and %
function integerDivision(dividend, divider) {
  var res = 1;
  while (dividend - divider >= divider){
    dividend = dividend - divider;
    res++;
  }
  return res;
}

// * bank deposit calculator
function getDepositDuration(initialDeposit, monthlyPercent, desiredDeposit) {
  var monthCounter = 0;
  var incomeDeposit = initialDeposit;
  while(desiredDeposit > incomeDeposit){
    incomeDeposit += incomeDeposit*(monthlyPercent/100);
    monthCounter++;
  }
  return monthCounter;
}
