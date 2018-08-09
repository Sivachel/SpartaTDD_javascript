describe("Test for advanced calculator", function() {

  var calculator = require("../lib/function");

  it("should add numbers together", function(){
    expect(calculator.addTwoNumbers(3,2)).toEqual(5);
  });
  it("should subract numbers from each other", function(){
    expect(calculator.subtractTwoNumbers(3,2)).toEqual(1);
  });
  it("should multiply two numbers together", function(){
    expect(calculator.multiplyTwoNumbers(3,2)).toEqual(6);
  });
  it("should divide two numbers", function(){
    expect(calculator.divideTwoNumbers(3,3)).toEqual(1);
  });
  it("should find the power of a number", function(){
    expect(calculator.powerOfTwoNumbers(2,2)).toEqual(4);
  });
  it("should find the squareRoot of a number", function(){
    expect(calculator.squareRoot(4)).toEqual(2);
  });
  it("should find the BMI in Metric units", function(){
    expect(calculator.metricMeasurement(32,4)).toEqual(2);
  });
  it("should find the BMI in Metric units", function(){
    expect(calculator.imperialMeasurement(32,4)).toEqual(1406);
  });
  it("should find the time to cover the distance", function(){
    expect(calculator.normalMileageTime(60,60)).toEqual(1);
  });
  it("should find the cost to cover the distance", function(){
    expect(calculator.normalMileageCost(60,60,1)).toEqual(1);
  });
  it("should find the time to cover the distance at high speed", function(){
    expect(calculator.highSpeedMileagetime(60,60,1)).toEqual(1);
  });
  it("should find the cost to cover the distance at high speed", function(){
    expect(calculator.highSpeedMileagecost(60,60,1,70)).toEqual(1.5);
  });
})
