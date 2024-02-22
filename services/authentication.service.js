import { createAuthToken, verifyAuthToken } from "../authentication/auth.js";

export const createUserAuthenticationToken = (req, res) => {
  const token = createAuthToken(req.body);
  return res.status(200).json({ status: true, message: "Token generated successfully!", token });
};

export const verifyUserAuthenticationToken = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const data = verifyAuthToken(token);
  if (!data) return res.status(401).json({ status: false, message: "Invalid or expired token!" });
  return res.status(200).json({ status: true, message: "Token verified successfully!", data });
};
