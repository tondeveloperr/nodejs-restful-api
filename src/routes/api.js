import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import userController from "../controllers/user-controller";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// User API
userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

export { userRouter };
