import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  interface Member {
    name:string;
    group:"ob"|"yb";
    like: "server"
  }

  const members: Member[] = [
    {
      name: "권세훈",
      group: "ob",
      like: "server",
    },
    {
      name: "전희선",
      group: "ob",
      like: "server",
    },
    {
      name: "최가희",
      group: "yb",
      like: "server",
    },
    {
      name: "천호영",
      group: "yb",
      like: "server",
    },
    {
      name: "임채영",
      group: "yb",
      like: "server",
    },
    {
      name: "강민재",
      group: "ob",
      like: "server",
    },
    {
      name: "남지윤",
      group: "ob",
      like: "server",
    },
]
  return res.status(200).json({ 
    status: 200,
    message: "멤버 조회 성공",
    data: members,
  });
});

module.exports = router; 