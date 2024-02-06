'use client'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel-channel";

import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'

import { ModalPlayer } from "./ModalPlayer";
import { useVideoHook } from "@/hooks/useVideoHook";
import { VideoItem } from "./VideoItems";
import { GetYoutubeVideosResponse, getVideosDetails } from "@/api/get-videos-details"
import { Skeleton } from "../ui/skeleton";


interface ChannelProps {
    videosId?: string[]
}
export function Channel({ videosId }: ChannelProps) {

    const { setDataVideo, dataVideo } = useVideoHook()

    const { data: youtube } = useQuery<GetYoutubeVideosResponse>({
        queryKey: ['youtube'],
        queryFn: () => {
            const response = getVideosDetails({ videosId }).then(result => {
                const payload = {
                    id: result.items[0].id,
                    title: result.items[0].snippet.title,
                    largeImage: result.items[0].snippet.thumbnails.maxres?.url
                }
                setDataVideo(payload)
                return result
            })
            return response
        },
    })

    console.log(youtube)
    return (
        <div>
            <h1 className='pt-32 mb-14 text-6xl  leading-[83.2px] font-semibold text-center text-blue-default '>
                CANAL OLÍMPICO DO BRASIL
            </h1>
            {youtube ?
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
                                        className=" "

                                    >
                                        <CarouselContent className=" w-[100%]">
                                            {youtube.items.map((res) => {
                                                return <VideoItem video={res} key={res.id} />
                                            })}
                                        </CarouselContent>
                                        <CarouselPrevious variant={"link"} className="text-white" />
                                        <CarouselNext variant={"link"} className="text-white ml-40" />
                                    </Carousel>}
                            </div>
                        </div>
                    </div>
                </motion.div>
                : <div>
                    <Skeleton className="w-full bg-gray-500 h-[880px] rounded-lg" />
                </div>}
        </div >
    )
}