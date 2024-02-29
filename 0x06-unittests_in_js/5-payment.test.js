const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  it('should log "The total is: 120" for inputs 100 and 20', function () {
    const consoleSpy = sinon.spy(console, "log");
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWith(consoleSpy, "The total is: 120");

    consoleSpy.restore();
  });

  it('should log "The total is: 20" for inputs 10 and 10', function () {
    const consoleSpy = sinon.spy(console, "log");
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWith(consoleSpy, "The total is: 20");

    consoleSpy.restore();
  });
});
