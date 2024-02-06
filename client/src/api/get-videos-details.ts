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


interface getVideosDetailsProps{
    videosId?: string[] 
}

export async function getVideosDetails({videosId}:getVideosDetailsProps){
    let ids = "";

    videosId?.forEach(element => {
        ids = ids.concat(`&id=${element}`)
    })
    console.log(ids)
    
    const query = `part=snippet%2CcontentDetails&chart=mostPopular&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
    
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?${query}`)
    const data:GetYoutubeVideosResponse = await response.json()
    
    console.log(data)
    return data
}