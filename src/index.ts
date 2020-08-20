import express from "express";
import dotenv from "dotenv";

import { AddressInfo } from "net";
import { UserDatabase } from "./data/UserDatabase";
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";

const app = express();
dotenv.config();
app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/signup", signup);
app.post("/login", login);

// (async () => {
//   console.log(await userDB.fetchUserInfoByEmail("lou@gmail.com"));
// })();
