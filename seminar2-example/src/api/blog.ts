import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  interface Blog{
    name:string;
    userId:string;
    nickname:string;
    titles:string[];
  }

  const blog: Blog = {
    name:"써니의 블로그",
    userId:"huiseon37",
    nickname:"Sunny",
    titles:["블로그글1","블로그글2","블로그글3","블로그글4","블로그글5"],
  }

  return res.status(200).json({ 
    status: 200,
    message: "블로그 조회 성공",
    data: blog,
  });
});

module.exports = router; 