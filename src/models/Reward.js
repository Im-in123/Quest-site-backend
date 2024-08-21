const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  quest_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quest', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reward_type: { type: String, required: true }, // e.g., points, tokens
  amount: { type: Number, required: true },
  issued_at: { type: Date, default: Date.now }
});

const Reward = mongoose.model('Reward', rewardSchema);

module.exports = Reward;
