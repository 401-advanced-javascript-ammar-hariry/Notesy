'use strict';

const minimist = require('minimist');

const add = require('add');

class Input {
    constructor() {
        const args = minimist(process.argv.slice(2)); // returns object
        const argMethod = process.argv.slice(2)[0];
        //validation of args: add
        if (argMethod === '--add' || argMethod === '-a' || argMethod === '--a') {
            this.action = argMethod;
            this.note = this.addNote(args.a || args.add);
            this.valid();
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
            return note = 'ERROR: this is not valid note';
        }
    }
    valid() {
        if (this.action) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = Input;