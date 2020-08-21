import express from "express";
import dotenv from "dotenv";

import { AddressInfo } from "net";
import { UserDatabase } from "./data/UserDatabase";
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { RecipesDatabase } from "./data/RecipesDatabase";
import { postRecipe } from "./endpoints/postRecipe";
import getRecipeById from "./endpoints/getRecipeById";
import { getUserProfile } from "./endpoints/getUserProfile";

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
app.post("/recipe/:id", postRecipe);
app.get("/recipe/:id", getRecipeById);
app.get("/user/profile", getUserProfile);

// const newRecipe = new RecipesDatabase().createRecipe(
//   "Miojo",
//   "A melhor miojo do sul do Brasil",
//   "2020-08-20",
//   "001"
// );

// const newRecipe = new RecipesDatabase();

// (async () => {
//   console.log(await newRecipe.getRecipeById("001"));
// })();

// async () => {
//   console.log(newRecipe);
// };
