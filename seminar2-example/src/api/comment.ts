import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    interface Comment{
        content:string;
        nickname:string;
        date:Date;
        like:number;
    }

    const comment:Comment = {
      content: "이거 참 맛있네요 추천추천^^",
      nickname:"써니",
      date: new Date("2022.10.08"),
      like: 4
    }

  return res.status(200).json({ 
    status: 200,
    message: "댓글 조회 성공",
    data: comment,
  });
});

module.exports = router; 