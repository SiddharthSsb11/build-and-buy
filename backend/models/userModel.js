import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
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
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

//instance method //available on all docs created out of certain collection
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {//mongoose pre-save MW
  if (!this.isModified('password')) {//updating userporfile details gaurd clause
    next();
  }

  const salt = await bcrypt.genSalt(10);//generates salt
  this.password = await bcrypt.hash(this.password, salt);
  //initially this.password is plane password at the time of sign-up..
  //hashing it before we create(save)(pre-save) and storing it in db
})

const User = mongoose.model('User', userSchema);

export default User;