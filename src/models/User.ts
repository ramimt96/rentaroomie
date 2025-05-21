import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    default: '',
  },
  preferences: {
    location: [String],
    priceRange: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 5000 },
    },
    lifestyle: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Use existing model or create a new one
export default mongoose.models.User || mongoose.model('User', UserSchema); 