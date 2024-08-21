const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo_url: { type: String },
  description: { type: String },
  website_url: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
