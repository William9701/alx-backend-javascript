const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  it("should use the Utils function and log the correct message", function () {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon
      .stub(Utils, "calculateNumber")
      .returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, "log");

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub is being called with the correct arguments
    sinon.assert.calledWith(calculateNumberStub, "SUM", 100, 20);

    // Verify that console.log is logging the correct message
    sinon.assert.calledWith(consoleLogSpy, "The total is: 10");

    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
