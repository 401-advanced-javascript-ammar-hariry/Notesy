'use strict';

require('@code-fellows/supergoose');
const CRUDNote = require('../models/note-collection');
jest.spyOn(global.console, 'log');

let savedNoteObj = {
  note: 'valid note',
  category: 'TEST',
};
const noteObj = new CRUDNote();

describe('note Model', () => {
  it('create() if it save note', () => {
    return noteObj.create(savedNoteObj)
      .then(record => {
        Object.keys(savedNoteObj).forEach(objKey => {
          expect(record[objKey]).toEqual(savedNoteObj[objKey]);
        });
      });
  });
  it('get() find all the note in a specific category if a category insert', () => {
    return noteObj.create(savedNoteObj)
      .then(record => {
        return noteObj.get(record.category)
          .then(getNote => {
            Object.keys(savedNoteObj).forEach(getKey => {
              expect(getNote[0][getKey]).toEqual(savedNoteObj[getKey]);
            });
          });
      });
  });
  it('get() find all the note if there is no category insert', () => {
    return noteObj.create(savedNoteObj)
      .then(record => {
        return noteObj.get()
          .then(getNote => {
            Object.keys(savedNoteObj).forEach(getKey => {
              expect(getNote[0][getKey]).toEqual(savedNoteObj[getKey]);
            });
          });
      });
  });
  it('update() will update a saved note ', () => {
    return noteObj.create(savedNoteObj)
      .then(record => {
        let updatedNoteObj = {
          note: 'Im Updated note',
          category: 'TEST',
          _id: record._id,
        };
        return noteObj.update(updatedNoteObj._id, updatedNoteObj.note)
          .then(updateNote => {
            return noteObj.get(updateNote.category)
              .then(getNote => {
                Object.keys(savedNoteObj).forEach(getKey => {
                  expect(getNote[0][getKey]).toEqual(savedNoteObj[getKey]);
                });
              });
          });
      });
  });
  it('delete() will delete a saved note by id', () => {
    return noteObj.create(savedNoteObj)
      .then(record => {
        let updatedNoteObj = {
          note: 'Im Updated note',
          category: 'TEST',
          _id: record._id,
        };
        return noteObj.delete(updatedNoteObj._id).then(() => {
          expect(console.log).toHaveBeenCalled();
        });
      });
  });
});