'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  action: { type: String },
  note: { type: String },
  category: { type: String, uppercase: true, enum: ['WORK', 'COLLGE', 'RAMADAN', 'HEALTH'] },
});

module.exports = mongoose.model('notes', notes);