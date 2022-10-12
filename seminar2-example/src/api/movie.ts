import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  interface Movie {
    name:string;
    release: Date;
  }

  const movie: Movie = {
      name: "리틀포레스트",
      release: new Date("2018.02.28"),
    }

  return res.status(200).json({ 
    status: 200,
    message: "영화 조회 성공",
    data: movie,
  });
});

module.exports = router; 