const UserSchema = new mongoose.Schema({
  username: String,
  hashedPassword: String,
});

//password를 hash로 바꿔주는 메소드
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

//password가 맞는지 검증하는 메소드
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

//username으로 유저를 찾는 static 메소드
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

//user 객체에서 hashedPassword 필드를 제거하고 반환하는 메소드
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d", //7일 동안 유효
    },
  );
  return token;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
