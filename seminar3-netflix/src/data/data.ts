import { Movie } from "../type/type";

export const movie: Movie = {
    "1":{
        _id: "1",
		thumbnail:process.env.SURINAM_IMG_S3_URL,
		titleImage: process.env.SURINAM_LOGO_S3_URL,
		videoUrl: process.env.SURINAM_IMG_S3_URL,
		movieInfo: {
			title: "수리남",
			isOriginal: true,
			realeaseDate:new Date("2022-10-30"),
			ageLimit: 18,
			episodeCount: 7,
			actors: ["하정우", "박해수", "황정민", "조우진", "유연석"],
			genres: ["공포","스릴러"],
			seriesFeatures: ["긴장감 넘치는"],
			isLiked: true,
			isBookmark:false,
		},
		currentEpisode :{
			episodeNumber : 1,
			summary : "강인구가 홍어 사업을 위해 수리남에 갔는데 잘못 걸려서 돈 뜯기게 생겼다가 한 목사를 만나 위기에서 벗어나는데...",
			entireRunTime:57,
			currentRunTime:62
		}
    },
    "2":{
        _id: "2",
		thumbnail:process.env.SKYCASTLE_IMG_S3_URL,
		titleImage: process.env.SKYCASTLE_LOGO_S3_URL,
		videoUrl: process.env.SKYCASTLE_IMG_S3_URL,
		movieInfo: {
			title: "스카이 캐슬",
			isOriginal: false,
			realeaseDate:new Date("2018-11-23"),
			ageLimit: 15,
			episodeCount: 20,
			actors: ["염정아","이태란","정준호"],
			genres: ["한국 드라마","드라마"],
			seriesFeatures: ["감정을 파고드는"],
			isLiked: false,
			isBookmark:true,
		},
		currentEpisode :{
			episodeNumber : 2,
			summary : "명주와 영재 사이의 비밀은 무엇일까. 아직 명주의 그늘이 남아있는 캐슬. 그곳에 이사온 새 가족..어쩌구..",
			entireRunTime:35,
			currentRunTime:63
		}
    }    
}