import jwt from "jsonwebtoken";

export const tokenAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("No token provided");
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      if(err.name === 'TokenExpiredError'){
        // const refreshToken = req.cookies.refreshToken;
       return res.status(401).send("Token Expired")
      }
      // console.log("some other error type: " + err.name)
      return res.status(403).send(err);
    } else {
      res.status(200).send(user);
      next()
    }
  });
};
