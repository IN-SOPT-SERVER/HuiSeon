// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

// ~ localhost:3000/api/user
router.get("/", (req: Request, res: Response) => { //get요청이 해당path로 들어오면
    const user = "하이 ㅋㅋ";
  return res.status(200).json({ //여기 로직 수행
    status: 200,
    message: "유저 조회 성공",
    data: user,
  });
});

module.exports = router; //위에 생성한 route 객체를 어디서든 사용하도록 모듈화