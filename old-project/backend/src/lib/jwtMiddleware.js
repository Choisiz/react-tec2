const jwtMiddleware = (ctx, next) => {
  const token = ctx.cookies.get("access_token");
  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    };
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      // 토큰의 남은 유효기간이 3일 미만인 경우 새 토큰 발급
        const user = await User.findById(decoded._id); 
        const token = user.generateToken();
        ctx.cookies.set("access_token", token, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
        });
      }
    return next();
  } catch (e) {
    // 토큰 검증 실패
    return next();
  }
}


module.exports = jwtMiddleware;
