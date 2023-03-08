import { Request, Response } from "express";

const createJob = async (req: Request, res: Response) => {
  res.send("create job");
};
const deleteJob = async (req: Request, res: Response) => {
  res.send("delete job");
};
const getAllJobs = async (req: Request, res: Response) => {
  res.send("gel all jobs");
};
const getOneJob = async (req: Request, res: Response) => {
  res.send("get one job");
};
const updateJob = async (req: Request, res: Response) => {
  res.send("update one job");
};
const showStats = async (req: Request, res: Response) => {
  res.send("Show job stats");
};

export { createJob, deleteJob, getAllJobs, getOneJob, updateJob, showStats };
