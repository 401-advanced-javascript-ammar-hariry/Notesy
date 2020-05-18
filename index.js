'use strict';

const Input = require('./lib/input');
const Note = require('./lib/note');

const inputObj = new Input();

const objOFNote = new Note(inputObj);

objOFNote.execute(inputObj);
objOFNote.add(inputObj);