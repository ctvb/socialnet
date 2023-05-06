const { Schema, Types } = require('mongoose');
const { format_date } = require('../helper');

const assignmentSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 50,
      default: 'Unnamed assignment',
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => format_date(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
