import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => { //get요청이 해당path로 들어오면
  interface User{
    name:string;
    age:number
  }

  const user:User = {name:"전희선", age:24};
  
  return res.status(200).json({ //여기 로직 수행
    status: 200,
    message: "유저 조회 성공",
    data: user,
  });
});

module.exports = router; //위에 생성한 route 객체를 어디서든 사용하도록 모듈화