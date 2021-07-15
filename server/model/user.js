const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  // author: ObjectBuilder,
  username: {
    type: String,
    required: true,
    max: [60, "ユーザー名は最大60文字までです"],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    max: [60, "Eメールは最大60文字までです"],
  },
  password: {
    type: String,
    required: true,
    max: [30, "パスワードは6文字以上で入力してください"],
    min: [6, "パスワードは最大60文字までです"],
  },
});

UserSchema.methods.hasSamePassword = function (inputPassword) {
  const user = this;
  return bcrypt.compareSync(inputPassword, user.password);
};

UserSchema.pre("save", function (next) {
  const user = this;
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
