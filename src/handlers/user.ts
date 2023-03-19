import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password), // grab the "password" sent by the client and hash it using our hash function
    },
  });
  const token = createJWT(user);
  res.json({ token });
};

export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    //Step 1 check if there is even a user
    where: {
      // checking to see if the user name that is passed in the client is the same as the one in the db
      username: req.body.username,
    },
  });
  // step 2 look at that users hashed PW and see if it match the plain text PW
  const isValid = await comparePasswords(req.body.password, user.password); // using the helper function we check is plain text PW is the same as the hashed PW

  if (!isValid) {
    res.status(401);
    res.json({ message: "Incorrect Password" });
    return;
  }
  const token = createJWT(user); // if it is valid create the token so they get access to the API
  res.json({ token });
};
