import { Response, Request, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors";

const errorHandlerMiddleware = (
  err: BadRequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = err.message;
    // defaultError.msg = Object.values(err.errors)
    //   .map((item) => item.message)
    //   .join(",");
  }
  // if (err.code && err.code === 11000) {
  //   defaultError.statusCode = StatusCodes.BAD_REQUEST;
  //   defaultError.msg = "field has to unique";
  // }

  // res.status(defaultError.statusCode).json({ msg: err });
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
