import Router from "express";
import controller from "../query/controller";
import { authenticate, isAdmin } from "../query/auth";

const router = Router();

router.use(authenticate);
router.use(isAdmin);

router.get("/users", controller.getUsers);
router.get("/users/:id", controller.getUser);
router.delete("/users/:id", controller.removeUser);

module.exports = router;
