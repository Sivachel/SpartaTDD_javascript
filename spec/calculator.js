escribe("Intro to doing TDD in javascript", function () {

  var calculator = require("../calculator/function")

it("should add numbers together", function (){
  expect(calculator.addTwoNumbers(3,2)).toEqual(5);

})




})
