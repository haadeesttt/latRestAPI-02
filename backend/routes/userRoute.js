import express from "express";
import { getUsers } from "../controller/userController.js";

const router = express.Router();

router.get('/user', getUsers);

export default router;