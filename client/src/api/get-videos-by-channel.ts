import { api, apiYoutube } from "@/services/api";
import { env } from "@/utils/env";
// part=snippet&order=viewCount&q=skateboarding+do&type=video&videoDefinition=high

// interface ThumbnailsProps{
//     default:{}
//     medium:{
//         url:string;
//         width: number;
//         height:number;
//     }
//     high:{}
//     standard:{}
//     maxres:{
//         url:string;
//         width: number;
//         height:number;
//     }
// }
export interface YoutubeSearchItemsProps{
    kind:string;
    id:{
        kind:string;
        videoId: string;
    }
    snippet:{
        title:string
        publishedAt:string
        // thumbnails:ThumbnailsProps
    }
    contentDetails:{
        duration:string
    }
}
export type GetYoutubeSearchResponse = {
    items: YoutubeSearchItemsProps[]
    
}

export async function getVideosByChannel(){
    const query = 'part=snippet&channelId=UCADFFCsD8JQBa9RQmyisjpA&maxResults=8&q=Time%20Brasil&type=video&key='+ process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    try{
        const response = await apiYoutube.get<GetYoutubeSearchResponse>(`/search?${query}`)
        const data = response.data
       
        return data
    }catch(err){
        console.error(err)
    }
    
}