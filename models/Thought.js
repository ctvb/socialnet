const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const { format_date } = require('../helper');

// Schema to create Student model
const studentSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    startDate: {
      type: Date,
      default: Date.now(),
      get: timestamp => format_date(timestamp)
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
