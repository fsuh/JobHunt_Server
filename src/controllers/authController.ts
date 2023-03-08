import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { UserModel } from "../types/UserInterface";

const register: RequestHandler = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};
const login: RequestHandler = async (req, res, next) => {
  res.send("login user");
};
const updateUser: RequestHandler = async (req, res, next) => {
  res.send("updateUser");
};

export { register, login, updateUser };
