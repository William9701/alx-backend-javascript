const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  it("should use the Utils function", function () {
    const stub = sinon.stub(Utils, "calculateNumber");
    stub.withArgs("SUM", 100, 20).returns(10);

    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(stub, "SUM", 100, 20);
    sinon.assert.calledWith(consoleSpy, "The total is: 10");

    stub.restore();
    consoleSpy.restore();
  });
});
