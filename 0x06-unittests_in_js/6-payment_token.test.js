const assert = require("assert");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("should return a promise resolving to the correct data when success is true", function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        assert.strictEqual(res.data, "Successful response from the API");
        done();
      })
      .catch((err) => done(err));
  });
});
