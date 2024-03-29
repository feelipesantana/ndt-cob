import { YoutubeItemsProps } from "@/api/get-videos-details";
import { CarouselItem } from "../ui/carousel-channel";
import { useVideoHook } from "@/hooks/useVideoHook";

interface VideoItem {
    video: YoutubeItemsProps
}
export function VideoItem({ video }: VideoItem) {

    const { setDataVideo, dataVideo } = useVideoHook()

    const thamab = video.snippet.thumbnails.medium
    const duration = video.contentDetails.duration
    // Remove PT
    const cleanedDuration = duration.substring(2);
    // Replace letters with colons
    const formattedDuration = cleanedDuration.replace(/[HM]/g, ':').replace('S', '')

    function handleChooseVideo(video: YoutubeItemsProps) {
        const payload = {
            id: video.id,
            title: video.snippet.title,
            largeImage: video.snippet.thumbnails.maxres.url
        }
        if (payload) {
            setDataVideo(payload)
        }
    }

    return (
        <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/4 cursor-pointer">
            <div style={{ backgroundImage: `url(${thamab.url})` }} className="h-36 bg-cover flex items-end justify-end" onClick={() => handleChooseVideo(video)}>
                <span className="text-white text-base font-medium leading-5 bg-black/60 p-1" >{formattedDuration}</span>
            </div>
            <p className="text-white h-[3em] overflow-hidden font-semibold text-sm mt-2">{video.snippet.title}</p>
        </CarouselItem>
    )
}