import Router from "express";
import controller from "../query/controller";

const router = Router();

router.get("/signin", (req, res) => res.render("signIn"));
router.get("/signup", (req, res) => res.render("signUp"));
router.post("/signin", controller.signIn);
router.post("/signup", controller.addUser);
router.post("/signout", controller.signOut);

module.exports = router;
