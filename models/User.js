const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');

const courseSchema = new Schema(
  {
    username: {
      type: String,
      required: unique,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [ /([a - z0 -9_\.-] +)@([\da - z\.-] +) \.([a - z\.]{ 2, 6})/ ]
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model('course', courseSchema);

module.exports = Course;
