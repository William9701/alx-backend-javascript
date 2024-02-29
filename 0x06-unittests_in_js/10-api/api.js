const express = require("express");

const app = express();
app.use(express.json()); // for parsing application/json

const port = 7865;

app.get("/available_payments", (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});
app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});
app.get("/cart/:id(\\d+)", (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
module.exports = app;