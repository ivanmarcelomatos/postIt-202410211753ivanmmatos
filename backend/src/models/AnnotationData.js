const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  notes: {
    type: String,
    required: true,
    trim: true
  },
  priority: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Annotations', AnnotationDataSchema);