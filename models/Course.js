const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    center: { type: mongoose.Schema.Types.ObjectId, ref: 'Center', required: true },
    status: { type: String, enum: ['open', 'closed'], default: 'open' },
    description: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Course || mongoose.model('Course', courseSchema);
