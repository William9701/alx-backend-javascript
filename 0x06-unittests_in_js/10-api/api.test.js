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
describe("Test the cart path", () => {
  it("It should respond with 200 status code when :id is a number", (done) => {
    request(app)
      .get("/cart/123")
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it("It should respond with the correct message when :id is a number", (done) => {
    request(app)
      .get("/cart/123")
      .end((err, res) => {
        expect(res.text).to.equal("Payment methods for cart 123");
        done();
      });
  });

  it("It should respond with 404 status code when :id is not a number", (done) => {
    request(app)
      .get("/cart/abc")
      .end((err, res) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
  });
});
describe("Test the login path", () => {
  it("It should respond with the correct message", (done) => {
    request(app)
      .post("/login")
      .send({ userName: "test" })
      .end((err, res) => {
        expect(res.text).to.equal("Welcome test");
        done();
      });
  });
});

describe("Test the available_payments path", () => {
  it("It should respond with the correct payment methods", (done) => {
    request(app)
      .get("/available_payments")
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
  });
});
