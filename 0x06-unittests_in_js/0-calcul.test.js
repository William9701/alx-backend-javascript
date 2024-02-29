const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return the sum of rounded a and b", function () {
    assert.equal(calculateNumber(1.4, 2.6), 4);
    assert.equal(calculateNumber(1.5, 2.4), 4);
    assert.equal(calculateNumber(1.6, 2.7), 5);
  });
});
