'use strict';

const minimist = require('minimist');

const add = require('add');
const list = require('list');
const deleteMethod = require('delete');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2)); // returns object
    const argMethod = process.argv.slice(2)[0];

    //validation of args: add
    if (argMethod === '--add' || argMethod === '-a' || argMethod === '--a') {
      this.action = argMethod;
      this.note = this.addNote(args.a || args.add);
      //   console.log('it is valid nooooote ------------------------------------------------>', typeof argNote);
    } else if (argMethod === '--delete' || argMethod === '-d' || argMethod === '--d') {
      const args = minimist(process.argv.slice(2));
      const argMethod = process.argv.slice(2)[0];
      const noteId = process.argv.slice(2)[1];
      this.id = noteId;
    } else {
      this.action = argMethod;
      this.error = 'ERROR: this is not valid arg';
    }
  }

  addNote(note = '') {
    // validation of note:
    if (typeof note === 'string') {
      return note;
    } else {
      return 'ERROR: this is not valid note';
    }
  }
  list() {
    const argMethod = process.argv.slice(2)[0];
    return argMethod === '--list' || argMethod === '-l' || argMethod === '--l';
  }
  delete() {
    const argMethod = process.argv.slice(2)[0];
    const noteId = process.argv.slice(2)[1];
    if (argMethod === '--delete' || argMethod === '-d' || argMethod === '--d' && noteId && typeof noteId === 'string') {
      console.log('bla b ------------------>>', argMethod, noteId);
      return noteId;
    } else {
      console.log('you have to  write an id');
    }
  }
  valid() {
    if (this.action && this.note) {
      return true;
    } else {
      return false;
    }
  }

}


module.exports = Input;