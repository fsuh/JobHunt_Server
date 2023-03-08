import express, { Request, Response } from "express";
import "express-async-errors";
const app = express();

import dotenv from "dotenv";
dotenv.config();

// db and authenticateUser
import connectDB from "./db/connect";

// routers
import authRouter from "./routes/authRoutes";
import jobsRouter from "./routes/jobsRoutes";

// middleware
import errorHandlerMiddleware from "./middleware/error-handler";
import notFoundMiddleware from "./middleware/not-found";

const PORT = process.env.PORT || 5006;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app.listen(PORT, () =>
//   console.log(`server listening on http://localhost:${PORT}`)
// );

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
