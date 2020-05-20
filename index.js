'use strict';
const mongoose = require('mongoose');
const Input = require('./lib/input');
const Note = require('./lib/note');

const DB_URI = 'mongodb://localhost:27017/nosty';
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const inputObj = new Input();
const objOFNote = new Note(inputObj);

// objOFNote.execute(inputObj);
// objOFNote.add(inputObj);

if (inputObj.valid()) {
  objOFNote.execute(inputObj);
  objOFNote.add(inputObj).then(mongoose.disconnect);
} else if (inputObj.list()) {
  objOFNote.listRender(inputObj).then(mongoose.disconnect);
} else if (inputObj.delete()) {
  objOFNote.deleteNote(inputObj).then(mongoose.disconnect);
} else {
  help();
}

function help() {
  console.log('error------> you have to input a valid method (--add, -a,--a) or valid note ("string")');
  process.exit();
}