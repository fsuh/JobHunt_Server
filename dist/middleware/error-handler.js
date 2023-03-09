"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    const defaultError = {
        statusCode: err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong, try again later",
    };
    if (err.name === "ValidationError") {
        defaultError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
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
exports.default = errorHandlerMiddleware;
