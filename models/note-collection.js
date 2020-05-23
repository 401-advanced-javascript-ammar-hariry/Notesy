'use strict';

const mongoose = require('mongoose');
const NotesSchema = require('./note-schema');

class CRUDNote {
  constructor() {

  }
  async get(category) {
    if (category) {
      return await NotesSchema.find({ category: category });
    } else {
      return await NotesSchema.find({});
    }
  }
  async create(record) {
    let theRecoed = new NotesSchema(record);
    return await theRecoed.save();
  }
  async update(_id, note) {
    return await NotesSchema.findByIdAndUpdate(_id, { note });
  }
  async delete(_id) {
    return await NotesSchema.deleteOne({ _id }, function(err) {
      if (!err) {
        console.log('the deletion done');
      } else {
        console.log('please write an exist ID');
      }
    });
  }
}

module.exports = CRUDNote;