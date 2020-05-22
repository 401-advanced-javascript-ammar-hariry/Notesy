'use strict';

const minimist = require('minimist');

class Input {
    constructor() {
        const args = minimist(process.argv.slice(2)); // returns object
        const argMethod = process.argv.slice(2)[0];
        //validation of args: add
        if (argMethod === '--add' || argMethod === '-a' || argMethod === '--a') {
            this.action = argMethod;
            this.note = this.addNote(args.a || args.add);
            this.category = this.category(args.category).toUpperCase();
        } else if (argMethod === '--delete' || argMethod === '-d' || argMethod === '--d') {
            let id = process.argv.slice(2)[1];
            this.id = id;
        } else if (argMethod === '--list' || argMethod === '-l' || argMethod === '--l') {
            const noteCategory = process.argv.slice(2)[1];
            this.category = noteCategory;
        } else if (argMethod === '--update' || argMethod === '--u') {
            let id = process.argv.slice(2)[1];
            let updatedNote = process.argv.slice(2)[2];
            this.id = id;
            this.updatedNote = updatedNote;
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

    category(category = '') {
        if (category) {
            return category;
        } else {
            return 'Error: please Add a category';
        }
    }
    list() {
        const argMethod = process.argv.slice(2)[0];
        return argMethod === '--list' || argMethod === '-l' || argMethod === '--l';
    }
    delete(id = '') {
        const argMethod = process.argv.slice(2)[0];
        if (argMethod === '--delete' || argMethod === '-d' || argMethod === '--d' && id) {
            return true;
        } else {
            return false;
        }
    }
    update() {
        const argMethod = process.argv.slice(2)[0];
        if (argMethod === '--update' || argMethod === '-u' || argMethod === '--u') {
            return true;
        } else {
            return false;
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