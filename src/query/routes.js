import Router from "express";
import controller from "./controller";

const router = Router();

router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUser);
router.post('/users', controller.addUser);
router.delete('/users/:id', controller.removeUser);
router.get('/cards', controller.getCards);
router.get('/card', controller.getCard);
router.post('/cards', controller.addCard);

module.exports = router;