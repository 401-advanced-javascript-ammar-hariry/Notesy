'use strict';

const CRUDNote = require('../models/note-collection');
let createNote = new CRUDNote();

class Note {
    constructor(addObj) {
        if (addObj.note) {
            this.id = addObj.id;
            this.payload = addObj.note;
            this.action = addObj.action;
            this.category = addObj.category;
            this.updateNote = addObj.updatedNote;
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
            await createNote.create(addObj);
            console.log(`the note has been saved`);
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
                let allNotes = await createNote.git(cate);
                console.log(`these are all your notes --------------->: `, allNotes);
            } else {
                console.log('please write a Right category');
            }
        } else {
            let allNotes = await createNote.git();
            console.log(`these are all your notes --------------->: `, allNotes);
        }
    }
    async deleteNote(addObj) {
        await createNote.delete(addObj.id, function(err) {

        });
    }
    async updateNote(addObj) {
        await createNote.update(addObj.id, addObj.updatedNote);
        console.log('your note is updated');

    }
}

module.exports = Note;