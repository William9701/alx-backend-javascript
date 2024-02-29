const request = require("request");
const chai = require("chai");
const expect = chai.expect;
const app = require("./api"); // assuming your express file is named 'api.js'

describe("Test the root path", () => {
  it("It should respond to the GET method", (done) => {
    request("http://localhost:7865", function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("It should return the correct message", (done) => {
    request("http://localhost:7865", function (error, response, body) {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});
