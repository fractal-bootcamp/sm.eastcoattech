import express from "express";
import { UserOutputDto } from "./types";

const authRouter = express.Router();

authRouter.get("/hydrate", async (req, res) => {
  // user was found in db in requireAuth middleware
  //get user out of req
  console.log("right before found user", req.headers.authorization);
  const foundUser: UserOutputDto = req.user;
  res.status(200).send(foundUser);
});

authRouter.post("/login", async (req, res) => {
  // user was found in db in requireAuth middlewares
  //get user out of req
  const foundUser: UserOutputDto = req.user;
  res.status(200).send(foundUser);
});

authRouter.post("/signup", async (req, res) => {
  // user was added to db in requiresAuth middleware
  // get user out of req
  const newUser: UserOutputDto = req.user;
  // send user to frontend
  res.status(201).send(newUser);
});

authRouter.get("/", (_req, res) => {
  res.send("hello base auth route");
});

export default authRouter;
