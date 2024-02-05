'use client'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GetYoutubeVideosResponse, getYoutubeVideos } from "@/api/get-youtube-videos"

import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'

import { ModalPlayer } from "./ModalPlayer";
import { useVideoHook } from "@/hooks/useVideoHook";
import { VideoItem } from "./VideoItems";


export function Channel() {
    const controls = useAnimationControls();
    const { setDataVideo, dataVideo } = useVideoHook()

    const { data: youtube } = useQuery<GetYoutubeVideosResponse>({
        queryKey: ['youtube'],
        queryFn: () => {
            const response = getYoutubeVideos().then(result => {
                const payload = {
                    id: result.items[0].id,
                    title: result.items[0].snippet.title,
                    largeImage: result.items[0].snippet.thumbnails.maxres.url
                }
                setDataVideo(payload)
                return result
            })
            return response
        },
    })

    return (
        <div className='mb-60'>
            <h1 className='pt-32 mb-14 text-6xl leading-[83.2px] font-semibold text-center text-blue-default '>
                CANAL OLÍMPICO DO BRASIL
            </h1>
            <motion.div
                key={dataVideo?.largeImage}
                style={{ backgroundImage: `url(${dataVideo?.largeImage})`, }}
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 1 }} // Animate opacity to 1
                className='bg-cover dynamic-block h-[880px] w-full   text-white flex items-center justify-center'>
                <div className="bg-black/70 w-full h-full flex items-center justify-center">
                    <div className='max-w-[1280px] w-full mx-auto pt-[11.2px] '>
                        <div className='max-w-[773px]'>
                            <h1 className='text-[56px] h-52   font-semibold leading-[67.2px]'>
                                {dataVideo?.title}
                            </h1>
                            <h5 className='mt-4'>
                                Desejo a todos os membros e torcedores um Natal repleto de alegria, paz e momentos especiais.
                                Que este seja um período de confraternização, amor e união para todos. Boas festas!
                            </h5>
                            <ModalPlayer />
                        </div>
                        <div className='mt-14'>
                            <h3 className='mb-6 ml-1'>Destaques</h3>
                            {youtube &&
                                <Carousel
                                    className="w-full"
                                >
                                    <CarouselContent className="w-full">
                                        {youtube.items.map((res) => {
                                            return <VideoItem video={res} key={res.id} />
                                        })}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>}
                        </div>
                    </div>
                </div>
            </motion.div>

        </div >
    )
}