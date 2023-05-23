import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.cookies.JWT;
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      res.clearCookie("JWT");
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};
