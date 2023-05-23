import Router from "express";
import controller from "./controller";
import { authenticate } from "./auth";

const router = Router();

router.post("/signin", controller.signIn);

router.use(authenticate);

router.post("/cards", controller.addCard);
router.post("/users", controller.addUser);
router.get("/users", controller.getUsers);
router.get("/users/:id", controller.getUser);
router.get("/cards", controller.getCards);
router.get("/card", controller.getCard);
router.delete("/users/:id", controller.removeUser);
router.post("/signout", controller.signOut);

module.exports = router;
