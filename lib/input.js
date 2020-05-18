'use strict';

const minimist = require('minimist');

const add = require('add');

function Input() {

  const args = minimist(process.argv.slice(2)); // returns object
  const argMethod = process.argv.slice(2)[0];
  //validation of args:
  if (argMethod === '--add' || argMethod === '-a' || argMethod === '--a') {
    this.action = argMethod;
    this.note = this.addNote(args.a || args.add);
  } else {
    this.action = argMethod;
    this.error = 'ERROR: this is not valid arg';
  }
}

Input.prototype.addNote = function(note = '') {

  // validation of note:
  if (typeof note === 'string') {
    return note;
  } else {
    return note = 'ERROR: this is not valid note';
  }
};

module.exports = Input;