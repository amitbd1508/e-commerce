import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: {
    type: String,
    required: true
  },
}).set('autoIndex', true)
  .set('minimize', false)
  .set('timestamps', true);

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, 8);
};

userSchema.methods.validPassword = function(password): any {
  return bcrypt.compareSync(password, this.password);
};

// Omit the password when returning a user
userSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.password;
    return ret;
  }
});

const User = mongoose.model('User', userSchema);

export default User;
