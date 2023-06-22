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

export const isAdmin = (req, res, next) => {
  const token = req.cookies.JWT;

  jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
    if (err) {
      res.clearCookie("JWT");
      return res.sendStatus(403);
    }

    const adminUsername = process.env.ADMIN_USERNAME;
    const username = decodedToken.payload;

    if (username === adminUsername) {
      req.user = decodedToken;
      next();
    } else {
      return res.sendStatus(403);
    }
  });
};
