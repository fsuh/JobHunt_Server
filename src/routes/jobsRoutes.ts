import { Router } from "express";
const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getOneJob,
  updateJob,
  showStats,
} from "../controllers/jobsController";

router.route("/").post(createJob).get(getAllJobs);
// remember about :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);
router.route("/job/:id").get(getOneJob).patch(updateJob);

export default router;
