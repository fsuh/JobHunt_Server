import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/User";
import { BadRequestError } from "../errors";
import { UserModel } from "../types/UserInterface";

const register: RequestHandler = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};
const login: RequestHandler = async (req, res, next) => {
  res.send("login user");
};
const updateUser: RequestHandler = async (req, res, next) => {
  res.send("updateUser");
};

export { register, login, updateUser };
