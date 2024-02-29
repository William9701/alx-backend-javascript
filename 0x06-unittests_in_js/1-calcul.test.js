const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber function", () => {
  it("should return the sum of two rounded numbers", () => {
    assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
  });

  it("should return the subtraction of two rounded numbers", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });

  it("should return the division of two rounded numbers", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });

  it('should return "Error" for division when roundedB is 0', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
  });
});
