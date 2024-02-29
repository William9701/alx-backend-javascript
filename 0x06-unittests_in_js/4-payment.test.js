const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  let consoleLogSpy;

  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, "log");

    sinon.stub(Utils, "calculateNumber").returns(10);
  });

  afterEach(function () {
    Utils.calculateNumber.restore();
    consoleLogSpy.restore();
  });

  it("should use the Utils function with the correct arguments", function () {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(Utils.calculateNumber, "SUM", 100, 20);
  });

  it("should log the correct message", function () {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(consoleLogSpy, "The total is: 10");
  });
});
