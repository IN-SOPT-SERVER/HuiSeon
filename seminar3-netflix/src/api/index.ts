import express, {Router} from "express";

const router: Router = express.Router();

router.use("/movie",require("./movie"));

module.exports = router;