
import { getYoutubeVideos } from "@/api/get-youtube-videos"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export async function CarouselChannel() {
    const youtube = await getYoutubeVideos()




    return (
        <Carousel

            className="w-full  "
        >
            <CarouselContent className="w-full">
                {youtube.items.map((res) =>
                    <CarouselItem key={res.id} className="md:basis-1/2 lg:basis-1/5">
                        <div className="p-1">
                            <MediaPlayer title="Sprite Fight" src={`https://www.youtube.com/watch?v=${res.id}`}>
                                <MediaProvider />
                                <DefaultVideoLayout thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt" icons={defaultLayoutIcons} />
                            </MediaPlayer>
                        </div>
                    </CarouselItem>
                )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}