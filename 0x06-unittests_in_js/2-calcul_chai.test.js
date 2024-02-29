const expect = require("chai").expect;
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should return the calc of rounded a and b", function () {
    expect(calculateNumber("SUM", 1.4, 2.6)).to.equal(4);
    expect(calculateNumber("SUBTRACT", 2.5, 1.4)).to.equal(2);
    expect(calculateNumber("DIVIDE", 2.5, 1.4)).to.equal(3);
    expect(calculateNumber("DIVIDE", 2.5, 0)).to.equal("Error");
  });
});
