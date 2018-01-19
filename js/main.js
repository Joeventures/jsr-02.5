isAllIntegers = function(creditCardNumber) {
  ccArr = creditCardNumber.split('');
  isValid = true;
  for(i = 0; i < ccArr.length; i++) {
    if(parseInt(ccArr[i]) != ccArr[i]) {
      isValid = false
    }
  }
  return isValid;
};

creditCardNumber = prompt('Enter a credit card number');
while(creditCardNumber.length > 0 && !isAllIntegers(creditCardNumber)) {
  creditCardNumber = prompt('Enter a credit card number');
}

ccArr = creditCardNumber.split('');
ccSum = 0;
for(i = 0; i < ccArr.length; i++) {
  if(ccArr.length%2 == 0) {
    if(i%2 == 0) {
      ccSum += ccArr[i] * 2;
    } else {
      ccSum += ccArr[i];
    }
  } else {
    if((i)%2 != 0) {
      ccSum += ccArr[i] * 2;
    } else {
      ccSum += ccArr[i];
    }
  }
}
if(ccSum%10 == 0) {
  alert('Your card ' + creditCardNumber + ' is valid');
} else {
  alert('Your card ' + creditCardNumber + ' is not valid');
}