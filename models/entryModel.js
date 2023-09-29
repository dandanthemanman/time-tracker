const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntrySchema = new Schema({
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
  },
},
    { timestamps: true}
)

module.exports = mongoose.model('Entries', EntrySchema);