function calculateNumber(type, a, b) {
  if (type === "SUM") {
    return Math.round(a) + Math.round(b);
  } else if (type === "SUBTRACT") {
    return Math.round(a) - Math.round(b);
  } else if (type === "DIVIDE") {
    if (Math.round(b) === 0) {
      return "Error";
    } else {
      return Math.round(a / b);
    }
  } else {
    return "Error";
  }
}

module.exports = calculateNumber;
