'use strict';

const mongoose = require('mongoose');
const NoteSchema = require('./schema.js');

module.exports = mongoose.model('Note', NoteSchema);