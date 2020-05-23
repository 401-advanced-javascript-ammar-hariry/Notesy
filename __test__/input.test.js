'use strict';

const minimist = require('minimist');

jest.mock('minimist');

const Input = require('../lib/input');

describe('Input Module', () => {
  it('addNote() the validation if the note type is String', () => {
    const inputObj = new Input();
    expect(inputObj.addNote('valid note')).toEqual('valid note');
    expect(inputObj.addNote(545454)).toEqual('ERROR: this is not valid note');
  });

  it('category() the validation if  returne false', () => {
    const inputObj = new Input();
    let category = 'testCate';
    expect(inputObj.category(category)).toEqual(category);
    expect(inputObj.category()).toEqual('Error: please Add a category');
  });
  it('list() the validation  if  returne false', () => {
    const inputObj = new Input();
    expect(inputObj.list()).toBeFalsy();
  });
  it('delete() the validation if  returne false ', () => {
    const inputObj = new Input();
    expect(inputObj.delete()).toBeFalsy();
  });
  it('update() the validation if  returne false', () => {
    const inputObj = new Input();
    expect(inputObj.update()).toBeFalsy();
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