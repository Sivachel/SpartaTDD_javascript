function addTwoNumbers(num1,num2) {
return num1 + num2;
}

function subtractTwoNumbers(num1,num2){
  return num1 - num2;
}

function multiplyTwoNumbers(num1,num2){
  return num1 * num2;
}

function divideTwoNumbers(num1,num2){
  return num1 / num2;
}

function powerOfTwoNumbers(num1,num2) {
  return num1**num2;
}

function squareRoot(num1) {
  return num1**0.5;
}

function metricMeasurement(num1,num2) {
  return num1 / (num2 * num2);
}

function imperialMeasurement(num1,num2) {
  return (num1 / (num2 * num2)) * 703;
}

function normalMileageTime(num1,num4){
  return num1 / num4;
}

function normalMileageCost(num1,num2,num3){
  return (num1 / num2) * num3;
}
function highSpeedMileagetime(num1,num4){
  return num1 / num4;
}
function highSpeedMileagecost(num1,num2,num3,num4) {
  return (num1 / (num2 - (num4 % 60) * 2 ) * num3);
}

module.exports = {
  addTwoNumbers: addTwoNumbers,
  subtractTwoNumbers: subtractTwoNumbers,
  multiplyTwoNumbers: multiplyTwoNumbers,
  divideTwoNumbers: divideTwoNumbers,
  powerOfTwoNumbers: powerOfTwoNumbers,
  squareRoot: squareRoot,
  metricMeasurement: metricMeasurement,
  imperialMeasurement: imperialMeasurement,
  normalMileageTime: normalMileageTime,
  normalMileageCost:normalMileageCost,
  highSpeedMileagetime: highSpeedMileagetime,
  highSpeedMileagecost: highSpeedMileagecost
}
