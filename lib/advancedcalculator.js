//using the switch method to enable user to select the calculator type
var calculator_type = prompt("Enter 1 for basic calculator, 2 for advanced calculator, 3 for BMI calculator, 4 for trip calculator");

switch (calculator_type) {
  case "1":Basic_calculator();
    break;
    case "2":Advanced_calculator();
      break;
      case "3":BMI_calculator();
        break;
        case "4":Trip_calculator();
          break;
  default:
}
//end of switch
//Start of Basic calculator function
function Basic_calculator(){
  var num1 = parseFloat(prompt("Please enter first number"));
  var op = prompt("Please enter operator");
  var num2 = parseFloat(prompt("Please enter second number"));
//Allows user to add two numbers
  if (op == "+"){
    alert (addTwoNumbers(num1,num2));
  }
//Allows user to subtract 2 numbers
  if (op == "-"){
    alert (subtractTwoNumbers(num1,num2));
  }
//Allows user multiply 2 numbers
  if (op == "*"){
    alert(multiplyTwoNumbers(num1,num2));
  }
// Allows user to divide 2 numbers
  if (op == "/"){
    alert(divideTwoNumbers(num1,num2));
  }
}
//end of basic calculator function
// Start of the advanced calculator
//Allows user to choose power or squareroot function
function Advanced_calculator(){
  var op = prompt("Enter 1 for power or 2 for squareroot");
// Allows user to workout the power of any numbers
  if (op == 1){
    var num1 = parseFloat(prompt("Enter base number"));
    var num2 = parseFloat(prompt("Enter power number"));
    alert(powerOfTwoNumbers(num1,num2));
  }
// Allows user to workout the squareroot of any numbers
  if (op == 2){
    var num1 = parseFloat(prompt("Enter a number"));
    alert(squareRoot(num1));
  }
}
// end of the advanced calculator
// Start of the BMI calculator
// Allows user to choose Metric or Imperial calculation
function BMI_calculator(){
  var op = prompt("Enter 1 for Metric(kg and cm) and 2 for Imperial (lb and inch)");
//calculation for metric units
  if (op == 1){
    var num1 =parseFloat(prompt("Enter your weight(kg)"));
    var num2 =parseFloat(prompt("Enter your height (m)"));
    alert(metricMeasurement(num1,num2));
  }
// calculation for imperial units
  if (op == 2)
  var num1 =parseFloat(prompt("Enter your weight(lb)"));
  var num2 =parseFloat(prompt("Enter your height (inch)"));
  alert(imperialMeasurement(num1,num2));
}
// end of BMI calculator
// start of the trip calculator
function Trip_calculator() {
  var num1 =parseFloat(prompt("Enter your distance (miles)"));
  var num2 =parseFloat(prompt("Enter the fuel efficiency"));
  var num3 =parseFloat(prompt("Enter the cost per gallon"));
  var num4 =parseFloat(prompt("Enter your speed"));

  if (num4 > 60){
    alert(("It will take you ") + (highSpeedMileagetime(num1,num4)) + " hours and it will cost you £ " + (highSpeedMileagecost(num1,num2,num3,num4)));
  }
  else {
    alert(("It will take you ") + (normalMileageTime(num1,num4)) + " hours and it will cost you £ " + (normalMileageCost(num1,num2,num3)));
  }
}
