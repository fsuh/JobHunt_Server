import { Router } from "express";
const router = Router();

import { register, login, updateUser } from "../controllers/authController";

// router.post("/register", register);
// router.post("/login", login);
// router.patch("/updateUser", updateUser);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);

export default router;
