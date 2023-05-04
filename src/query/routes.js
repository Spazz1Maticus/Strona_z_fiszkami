import Router from "express";
import controller from "./controller";

const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.addUser);
router.delete('/:id', controller.removeUser);
router.get('/card', controller.getCard);

module.exports = router;