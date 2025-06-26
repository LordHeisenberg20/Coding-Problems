const fs = require('fs');
function addNotes(req, res) {
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
  
}

module.exports = {
    addNotes
};
