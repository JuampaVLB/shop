import express, { Router } from "express";
import { handleGetUsers, handleUpdateUser } from "../controller/user.controller";
import { schemaValidation } from "../middlewares/validator.middleware";
import { updateUserSchema } from "../schemas/auth.schemas";

const router: Router = express.Router();

router.get('/', handleGetUsers)
    .put('/:id', schemaValidation(updateUserSchema), handleUpdateUser);

export default router;
