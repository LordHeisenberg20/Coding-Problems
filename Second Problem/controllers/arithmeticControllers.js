function addition(req, res) {
    const a = req.body.a;
    const b = req.body.b;
    res.send(`The sum of the numbers are: ${a + b}`);
}
function subtraction(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  res.send(`The difference of the numbers are: ${a - b}`);
}
function multiplication(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  res.send(`The product of the numbers are: ${a * b}`);
}
function division(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  res.send(`The quotient is: ${a / b}`);
}
function sqrt(req, res) {
    const num = req.body.num;
    res.send(`The Square Root of ${num} is: ${Math.sqrt(num)}`);
}

module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
    sqrt
};
