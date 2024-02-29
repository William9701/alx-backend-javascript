const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Create a spy on console.log before each test
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it("should log the correct message for totalAmount 100 and totalShipping 20", function () {
    // Stub Utils.calculateNumber to always return 120
    sinon.stub(Utils, "calculateNumber").returns(120);

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log is logging the correct message
    sinon.assert.calledWith(consoleLogSpy, "The total is: 120");

    // Verify that console.log is only called once
    sinon.assert.calledOnce(consoleLogSpy);

    // Restore the stub
    Utils.calculateNumber.restore();
  });

  it("should log the correct message for totalAmount 10 and totalShipping 10", function () {
    // Stub Utils.calculateNumber to always return 20
    sinon.stub(Utils, "calculateNumber").returns(20);

    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is logging the correct message
    sinon.assert.calledWith(consoleLogSpy, "The total is: 20");

    // Verify that console.log is only called once
    sinon.assert.calledOnce(consoleLogSpy);

    // Restore the stub
    Utils.calculateNumber.restore();
  });
});
