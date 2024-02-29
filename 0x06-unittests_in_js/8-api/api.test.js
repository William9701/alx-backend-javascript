// api.test.js
const chai = require("chai");
const request = require("request");
const app = require("./api");

const expect = chai.expect;

describe("API", () => {
  describe("GET /", () => {
    it("should return correct status code", (done) => {
      request.get("http://localhost:7865", (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("should return correct result", (done) => {
      request.get("http://localhost:7865", (error, response, body) => {
        expect(body).to.equal("Welcome to the payment system");
        done();
      });
    });

    it("should handle other cases", (done) => {
      // Add your test logic for other cases if needed
      done();
    });
  });
});
