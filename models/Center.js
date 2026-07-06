const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    type: { type: String, enum: ['hub', 'spoke'], default: 'spoke' },
    shortLocation: { type: String, trim: true },
    address: { type: String, trim: true },
    mapLink: { type: String, trim: true },
    registrationsOpen: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Center || mongoose.model('Center', centerSchema);
