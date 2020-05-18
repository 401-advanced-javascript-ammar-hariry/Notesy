'use strict';

class Note {
  constructor(addObj) {
    if (addObj.note) {
      this.id = Math.ceil(Math.random() * 10);
      this.payload = addObj.note;
      this.action = addObj.action;
    } else {
      this.action = addObj.action;
      this.error = addObj.error;
    }
  }
  execute(addObj) {
    if (addObj) {
      const newobj = {
        action: addObj.action,
        payload: 'notes are a good way to remember things',
      };
      console.log(newobj);
    }
  }

  add(addObj) {
    if (addObj.note) {
      console.log(`Adding Note: ${addObj.note}`);
    } else {
      console.log(` ${this.error}`);
    }
  }
}

module.exports = Note;