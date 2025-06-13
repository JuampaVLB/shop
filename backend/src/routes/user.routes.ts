import express, { Router } from "express";
import { handleGetUsers, test } from "../controller/user.controller";

const router: Router = express.Router();

router.get('/', handleGetUsers);

export default router;
