const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  campaign_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true }, // e.g., registration, wallet creation, extension installation
  requirements: { type: mongoose.Schema.Types.Mixed }, // JSON or text for dynamic requirements
  reward: { type: String }, // e.g., points, tokens
  start_date: { type: Date },
  end_date: { type: Date },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Quest = mongoose.model('Quest', questSchema);

module.exports = Quest;
