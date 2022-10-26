import express, { Request, Response, Router } from "express";
import { movie } from "../data/data";

const router: Router = express.Router();

router.get("/:movieId", (req: Request, res: Response) => {
  const movieId = req.params.movieId;

  if(!movieId){
    return res.status(404).json({ 
      status: 404,
      message: "정보 조회 실패",
    });
  }

  const data = movie[movieId];

  return res.status(200).json({ 
    status: 200,
    message: "넷플릭스 컨텐츠 조회 성공",
    data,
  });
});

router.post("/like/:movieId", (req: Request, res:Response)=>{
  const isLiked = req.body.isLiked;
  const movieId = req.params.movieId;

  if(!movieId){
    return res.status(404).json({ 
      status: 404,
      message: "정보 조회 실패",
    });
  }

  if(typeof isLiked !== 'boolean'){
    return res.status(400).json({ 
      status: 400,
      message: "정보 조회 실패",
    });
  }

  //* isLiked와 movieId를 가지고 디비를 어찌저찌 바꿈

  return res.status(200).json({ 
    status: 200,
    message: "좋아요 성공",
  });
});

router.post("/bookmark/:movieId", (req: Request, res:Response)=>{
  const isBookmark = req.body.isBookmark;
  const movieId = req.params.movieId;

  if(!movieId){
    return res.status(404).json({ 
      status: 404,
      message: "정보 조회 실패",
    });
  }

  if(typeof isBookmark !== 'boolean'){
    return res.status(400).json({ 
      status: 400,
      message: "정보 조회 실패",
    });
  }

  //* isBookmark와 movieId를 가지고 디비를 어찌저찌 바꿈

  return res.status(200).json({ 
    status: 200,
    message: "찜하기 성공",
  });
});

module.exports = router; 