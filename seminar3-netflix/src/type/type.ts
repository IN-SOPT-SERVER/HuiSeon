export interface Movie {
    [key:string]:MovieInfo;
}

interface MovieInfo {
    _id: string;
	thumbnail:string | undefined;
	titleImage: string | undefined;
	videoUrl: string | undefined;
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