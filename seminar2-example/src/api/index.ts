import express, {Router} from "express";

const router: Router = express.Router();

router.use("/user",require("./user"));
router.use("/members",require("./members"));
router.use("/movie",require("./movie"));
router.use("/comment",require("./comment"));
router.use("/blog",require("./blog"));

module.exports = router;