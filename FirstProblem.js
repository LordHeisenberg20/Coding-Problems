const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const fs = require("fs");


//take name and message from body and pass it to user
app.post("/sendMessage", (req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    res.send(`Hi, ${name}, your message was: "${message}"`);
});


//take a number and send the square root
app.post("/getSqrt", (req, res) => {
  const num = req.body.num;
  res.send(`The Square Root of ${num} is: ${Math.sqrt(num)}`);
});


// send back the current time
app.get("/time", (req, res) => {
  const currentTime = new Date();
  res.send(`The current time is: ${currentTime}`);
});


// /addFruitsName its will add element in the arr in server side and send back the while array in response
const fruits = ["Apple", "Banana", "Cherry"];
app.post("/addFruitsName", (req, res) => {
  const fruitsName = req.body.fruitsName;
  fruits.push(fruitsName);
  res.send(`The fruits in the updated array are: ${fruits.join(", ")}`);
});


// /add num1, num2 res = a+b
app.post("/getSum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  res.send(`The sum of the numbers are: ${a + b}`);
});


//addnotes add notes to the file that will be created on server by fs 
app.post("/addNotes", (req, res) => {
  const note = req.body.note;

  if (!fs.existsSync('notes.txt')) {
    fs.writeFileSync('notes.txt', note);
    res.send(`New File was Created. \n Note you added was: ${note} \n Note has been added to the file successfully!`);
  }

  else {
    fs.appendFileSync('notes.txt', `\n${note}`);
    res.send(
      `Note you added: \n ${note} \n Note has been added to the file successfully!`
    );
  }
  
});


app.listen(port, () => {
  console.log(`Your server is running at http://localhost:${port}`);
});

