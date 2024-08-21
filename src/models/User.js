// User Model
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password_hash: { type: String, required: true },
    verified: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });
  
  // Profile Model
  const profileSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String },
    profile_picture: { type: String },
    name: { type: String, required: true },

  });
  
  const User = mongoose.model('User', userSchema);
  const Profile = mongoose.model('Profile', profileSchema);
  