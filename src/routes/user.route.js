import Router from "express";
import controller from "../query/controller";
import { authenticate } from "../query/auth";

const router = Router();

router.use(authenticate);

router.post("/cards", controller.addCard);
router.get("/cards", controller.getCards);
router.get("/card", controller.getCard);

module.exports = router;
