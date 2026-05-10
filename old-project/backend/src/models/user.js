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

const User = mongoose.model("User", UserSchema);

module.exports = User;
