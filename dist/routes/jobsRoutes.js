"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const jobsController_1 = require("../controllers/jobsController");
router.route("/").post(jobsController_1.createJob).get(jobsController_1.getAllJobs);
// remember about :id
router.route("/stats").get(jobsController_1.showStats);
router.route("/:id").delete(jobsController_1.deleteJob).patch(jobsController_1.updateJob);
router.route("/job/:id").get(jobsController_1.getOneJob).patch(jobsController_1.updateJob);
exports.default = router;
