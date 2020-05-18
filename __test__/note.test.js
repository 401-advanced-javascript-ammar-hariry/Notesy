'use strict';

const Note = require('../lib/note');

jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('execute() does its work', () => {
    const objOFNote = new Note({ payload: 'yes', action: '--a' });
    objOFNote.execute({ payload: 'yes', action: '--a' });
    expect(console.log).toHaveBeenCalled();
  });

  it('add() does its work', () => {
    const objOFNote = new Note({ action: '--a', error: 'ERROR: this is not valid arg' });
    objOFNote.add({ action: '--a', error: 'ERROR: this is not valid arg' });
    expect(console.log).toHaveBeenCalled();
  });

  it('add() does its work', () => {
    const objOFNote = new Note({ payload: 'yes', action: '--a', note: 'valid note' });
    objOFNote.add({ payload: 'yes', action: '--a', note: 'valid note' });
    expect(console.log).toHaveBeenCalled();
  });

});