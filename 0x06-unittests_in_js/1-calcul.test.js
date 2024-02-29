const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should return the calc of rounded a and b", function () {
    assert.equal(calculateNumber("SUM", 1.4, 2.6), 4);
    assert.equal(calculateNumber("SUBTRACT", 2.5, 1.4), 2);
    assert.equal(calculateNumber("DIVIDE", 2.5, 1.4), 3);
    assert.equal(calculateNumber("DIVIDE", 2.5, 0), "Error");
  });
});
