import { env } from "@/utils/env";
// part=snippet&order=viewCount&q=skateboarding+do&type=video&videoDefinition=high

interface ThumbnailsProps{
    default:{}
    medium:{
        url:string;
        width: number;
        height:number;
    }
    high:{}
    standard:{}
    maxres:{
        url:string;
        width: number;
        height:number;
    }
}
interface YoutubeItemsProps{
    kind:string;
    id:string;
    snippet:{
        title:string
        publishedAt:string
        thumbnails:ThumbnailsProps
    }
}
interface GetYoutubeVideosResponse{
    items: YoutubeItemsProps[]
    contentDetails:{
        duration:string
    }
}

export async function getYoutubeVideos(){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    const data:GetYoutubeVideosResponse = await response.json()

    return data
}