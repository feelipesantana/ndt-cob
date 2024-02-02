'use client'
import { GetYoutubeVideosResponse, YoutubeItemsProps, getYoutubeVideos } from "@/api/get-youtube-videos"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { animate, motion, useAnimate, useAnimation, useAnimationControls } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { PlayCircle } from "lucide-react"
import { Suspense, useEffect, useState } from "react"
import { useRef } from 'react';

import { Button } from "../ui/button"
import {
    MediaFullscreenChangeEvent,
    MediaPlayer,
    MediaPlayerInstance,
    MediaProvider,
    PlayButton,
    type MediaPlayEvent,
    type MediaPlayFailEvent,
    type MediaPlayRequestEvent,
} from '@vidstack/react';
import { ModalPlayer } from "./ModalPlayer";
import { useVideoHook } from "@/hooks/useVideoHook";


export function Channel() {
    const controls = useAnimationControls();

    const { setDataVideo, dataVideo } = useVideoHook()


    const { data: youtube } = useQuery<GetYoutubeVideosResponse>({
        queryKey: ['youtube'],
        queryFn: getYoutubeVideos
    })

    console.log(youtube)
    const idPreSet = youtube?.items[0].id
    const imagePreSet = youtube?.items[0].snippet.thumbnails.maxres.url
    const titlePreSet = youtube?.items[0].snippet.title

    function handleChooseVideo(video: YoutubeItemsProps) {

        const payload = {
            id: video.id,
            title: video.snippet.title,
            largeImage: video.snippet.thumbnails.maxres.url
        }
        console.log(payload)
        if (payload) {
            setDataVideo(payload)
        }
    }


    return (
        <div className='mb-60'>
            <h1 className='pt-32 mb-14 text-6xl leading-[83.2px] font-semibold text-center text-blue-default '>
                CANAL OLÍMPICO DO BRASIL
            </h1>
            <motion.div
                style={{ backgroundImage: dataVideo?.largeImage === "" ? `url(${imagePreSet})` : `url(${dataVideo?.largeImage})` }}

                animate={controls}
                className='dynamic-block h-[880px] w-full   text-white flex items-center justify-center'>
                <div className="bg-black/70 w-full h-full flex items-center justify-center">
                    <div className='max-w-[1280px] w-full mx-auto pt-[11.2px] '>
                        <div className='max-w-[773px]'>
                            <h1 className='text-[56px] h-52   font-semibold leading-[67.2px]'>
                                {dataVideo?.title === "" ? titlePreSet : dataVideo?.title}
                            </h1>
                            <h5 className='mt-4'>Desejo a todos os membros e torcedores um Natal repleto de alegria, paz e momentos especiais. Que este seja um período de confraternização, amor e união para todos. Boas festas!
                            </h5>
                            <div>
                                <ModalPlayer idPreset={idPreSet} />
                            </div>
                        </div>
                        <div className='mt-14'>
                            <h3 className='mb-6 ml-1'>Destaques</h3>
                            {youtube &&
                                <Carousel
                                    className="w-full "
                                >
                                    <CarouselContent className="w-full">
                                        {youtube.items.map((res) => {
                                            const thamab = res.snippet.thumbnails.medium

                                            const duration = res.contentDetails.duration
                                            // Remove PT
                                            const cleanedDuration = duration.substring(2);
                                            // Replace letters with colons
                                            const formattedDuration = cleanedDuration.replace(/[HM]/g, ':').replace('S', '')

                                            console.log(formattedDuration);
                                            console.log(duration)
                                            return (
                                                <CarouselItem key={res.id} className="md:basis-1/2 lg:basis-1/5">
                                                    <div style={{ backgroundImage: `url(${thamab.url})` }} className="h-36 bg-cover flex items-end justify-end" onClick={() => handleChooseVideo(res)}>
                                                        <span className="text-white text-base font-medium leading-5 bg-black/60 p-1" >{formattedDuration}</span>
                                                    </div>
                                                </CarouselItem>
                                            )
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