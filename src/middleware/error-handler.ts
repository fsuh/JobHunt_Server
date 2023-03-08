import { Response, Request, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { object } from "webidl-conversions";

const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: "Something went wrong, try again later",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = err.message;
    // defaultError.msg = Object.values(err.errors)
    //   .map((item) => item.message)
    //   .join(",");
  }
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = "field has to unique";
  }

  //res.status(defaultError.statusCode).json({ msg: err });
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
