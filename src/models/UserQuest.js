const mongoose = require('mongoose');

const userQuestSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quest_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quest', required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  progress: { type: Number, default: 0 }, // e.g., percentage completed
  completed_at: { type: Date },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const UserQuest = mongoose.model('UserQuest', userQuestSchema);

module.exports = UserQuest;
