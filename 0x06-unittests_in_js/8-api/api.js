const app = require("./server");
const port = 7865;

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
