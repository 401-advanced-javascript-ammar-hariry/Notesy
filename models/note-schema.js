'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  action: { type: String },
  note: { type: String },
});

module.exports = mongoose.model('notes', notes);