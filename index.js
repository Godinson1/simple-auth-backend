import express from "express";
import cors from "cors";

import { createUserAuthenticationToken, verifyUserAuthenticationToken } from "./services/authentication.service.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create-token", createUserAuthenticationToken);
app.post("/verify-token", verifyUserAuthenticationToken);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is listening at PORT: ${PORT}`));
