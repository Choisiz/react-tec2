const jwt = require("jsonwebtoken");
const User = require("../models/user");

const parseCookies = (cookieHeader = "") =>
  cookieHeader.split(";").reduce((cookies, pair) => {
    const [key, value] = pair.split("=").map((item) => item && item.trim());
    if (key && value) {
      cookies[key] = decodeURIComponent(value);
    }
    return cookies;
  }, {});

module.exports = async (req, res, next) => {
  const cookies = parseCookies(req.headers.cookie || "");
  const token = cookies.access_token;
  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      _id: decoded._id,
      username: decoded.username,
    };

    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findById(decoded._id).exec();
      if (user) {
        const newToken = user.generateToken();
        res.cookie("access_token", newToken, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
        });
      }
    }
    return next();
  } catch (e) {
    return next();
  }
};
