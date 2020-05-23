'use strict';

const Note = require('../lib/note');

jest.spyOn(global.console, 'log');

const obj = {
  note: 'valid noye',
  id: '16546546543312',
  category: 'newCate',
  action: '--add',
  updatedNote: 'new note',
};
describe('Note Module', () => {
  it('execute() does its work', () => {
    const objOFNote = new Note({ payload: 'yes', action: '--a' });
    objOFNote.execute({ payload: 'yes', action: '--a' });
    expect(console.log).toHaveBeenCalled();
  });
  it('add() does its work', () => {
    const objOFNote = new Note(obj);
    objOFNote.add(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('add() does not  work', () => {

    const objOFNote = new Note(obj);
    objOFNote.add(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('add() does its work', () => {
    const obj = {
      note: 'valid noye',
      id: '16546546543312',
      category: 'newCate',
    };
    const objOFNote = new Note(obj);
    objOFNote.add(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('render() does it work', () => {
    const addObj = new Note(obj);
    addObj.render(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('render() does it work', () => {
    const obj = {
      id: '16546546543312',
      updatedNote: 'new note',
    };
    const addObj = new Note(obj);
    addObj.render(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('listRender() does it work if have a category', () => {
    const addObj = new Note(obj);
    addObj.listRender(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('listRender() does its work if  dont have  a category', () => {
    const obj = {
      note: 'valid noye',
      id: '16546546543312',
      updatedNote: 'new note',
    };
    const objOFNote = new Note(obj);
    objOFNote.listRender(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('deleteNote() does it is work', () => {
    const objOFNote = new Note(obj);
    objOFNote.deleteNote(obj);
    expect(console.log).toHaveBeenCalled();
  });
  it('updateNote() does it is work', () => {
    const objOFNote = new Note(obj);
    objOFNote.noteUpdate(obj);
    expect(console.log).toHaveBeenCalled();
  });


});