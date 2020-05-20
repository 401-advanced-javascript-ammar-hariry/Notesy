'use strict';

const minimist = require('minimist');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'hellooo',
  };
});

const Input = require('../lib/input');

describe('Input Module', () => {
  it('addNote() the validation if the note type is String', () => {
    const inputObj = new Input();
    expect(inputObj.addNote('valid note')).toEqual('valid note');
  });

  it('addNote() the validation if the note type is not String', () => {
    const inputObj = new Input();
    expect(inputObj.addNote(545454)).toEqual('ERROR: this is not valid note');
  });

  it('If the command (add) and data (the note) were both valid', () => {
    const inputObj = new Input();
    inputObj.action = '--add';
    inputObj.note = 'hello';
    expect(inputObj.valid()).toBeTruthy();
  });
  it('If the command (add) and data (the note) were both invalid', () => {
    const inputObj = new Input();
    expect(inputObj.valid()).toBeFalsy();
  });

});