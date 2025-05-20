const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  completionDate: {
    type: Date,
    required: true
  },
  client: {
    type: String,
    required: true,
    trim: true
  },
  technologies: [{
    type: String,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Project', projectSchema); 