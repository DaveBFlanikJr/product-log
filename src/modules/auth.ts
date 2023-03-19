import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash); // will return a promise that will return true or false
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

//function for creating a JWT
export const createJWT = (user) => {
  const token: string = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

//creating middleware to protect routes (ensure user is sign in)
export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  // check to see if bearer
  if (!bearer) {
    res.status(401);
    res.json({ message: "Invalid User" });
    return;
  }
  //grab the token off the bearer and validate if its real
  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.json({ message: "Invalid Token" });
    return;
  }

  //check if its a real JWT signed by the secrete in the JWT_SECRETS
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    console.log(payload);
    next();
    return;
  } catch (e) {
    console.log(e);
    res.status(401);
    res.json({ message: "Invalid Token" });
    return;
  }
};
