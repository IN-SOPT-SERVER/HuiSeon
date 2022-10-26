export interface Movie {
    [key:string]:MovieInfo;
}

interface MovieInfo {
    _id: string;
	thumbnail:string;
	titleImage: string;
	videoUrl: string;
	movieInfo: {
		title: string;
		isOriginal: boolean;
		realeaseDate: Date;
		ageLimit: number;
		episodeCount: number;
		actors: string[];
		genres: string[];
		seriesFeatures: string[];
		isLiked: boolean;
		isBookmark:boolean
	},
	currentEpisode :{
		episodeNumber : number;
		summary : string;
		entireRunTime:number;
		currentRunTime:number;
	}
}