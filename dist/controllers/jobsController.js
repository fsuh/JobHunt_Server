"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showStats = exports.updateJob = exports.getOneJob = exports.getAllJobs = exports.deleteJob = exports.createJob = void 0;
const createJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("create job");
});
exports.createJob = createJob;
const deleteJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("delete job");
});
exports.deleteJob = deleteJob;
const getAllJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("gel all jobs");
});
exports.getAllJobs = getAllJobs;
const getOneJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("get one job");
});
exports.getOneJob = getOneJob;
const updateJob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("update one job");
});
exports.updateJob = updateJob;
const showStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Show job stats");
});
exports.showStats = showStats;
