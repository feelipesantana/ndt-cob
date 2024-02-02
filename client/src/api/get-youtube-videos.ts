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
export interface YoutubeItemsProps{
    kind:string;
    id:string;
    snippet:{
        title:string
        publishedAt:string
        thumbnails:ThumbnailsProps
    }
    contentDetails:{
        duration:string
    }
}
export type GetYoutubeVideosResponse = {
    items: YoutubeItemsProps[]
    
}

export async function getYoutubeVideos(){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&chart=mostPopular&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    const data:GetYoutubeVideosResponse = await response.json()

    return data
}