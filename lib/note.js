'use strict';

const Notes = require('../models/note-schema');

class Note {
  constructor(addObj) {
    if (addObj.note) {
      this.id = addObj.id;
      this.payload = addObj.note;
      this.action = addObj.action;
      this.category = addObj.category;
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

  async add(addObj) {
    if (this.payload && this.action) {
      let record = new Notes(addObj);
      let save = await record.save();
      console.log(`the note has been saved`, save);
    } else {
      console.log(`Error ----------> ${this.error}`);
    }
  }
  render(addObj) {
    if (addObj.note) {
      console.log(`Adding Note: ${addObj.note}`);
    } else {
      console.log(` ${this.error}`);
    }
  }
  async listRender(addObj) {
    if (addObj.category) {
      let cate = addObj.category.toUpperCase();
      if (typeof cate === 'string') {
        let allNotes = await Notes.find({ category: addObj.category });
        console.log(`these are all your notes --------------->: `, allNotes);
      } else {
        console.log('please write a Right category');
      }
    } else {
      let allNotes = await Notes.find({});
      console.log(`these are all your notes --------------->: `, allNotes);
    }
  }
  async deleteNote(addObj) {
    await Notes.deleteOne({ _id: addObj.id }, function(err) {
      if (!err) {
        console.log('the deletion done');
      } else {
        console.log('please write an exist ID');
      }
    });
  }
}

module.exports = Note;