import jwt from "jsonwebtoken";
import { JWT_KEY, JWT_EXPIRATION_TIME } from "./constants.js";

export const createAuthToken = (payload) => {
  const token = jwt.sign(payload, JWT_KEY, { expiresIn: JWT_EXPIRATION_TIME });
  return token;
};

export const verifyAuthToken = (token) => {
  try {
    const payload = jwt.verify(token, JWT_KEY);
    return payload;
  } catch (error) {
    return false;
  }
};
