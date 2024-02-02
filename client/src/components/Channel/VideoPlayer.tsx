import { requestAsyncStorage } from "next/dist/client/components/request-async-storage.external";
import { useCallback, useEffect, useRef, useState } from "react";
import {
    Gesture,
    MediaAutoPlayEvent,
    MediaAutoPlayEventDetail,
    MediaFullscreenChangeEvent,
    MediaPlayer,
    MediaPlayerInstance,
    MediaPlayerQuery,
    MediaPlayEvent,
    MediaProvider,
    PlayButton,
    Slider,
    SliderInstance,
    Time,
    TimeSlider,
    TimeSliderInstance,
    useMediaState,
    useSliderState,
    useStore
} from "@vidstack/react"

import '@vidstack/react/player/styles/base.css';

import {
    DefaultAudioLayout,
    defaultLayoutIcons,
    DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import { Pause, Play } from "lucide-react";
import { useVideoHook } from "@/hooks/useVideoHook";
export function VideoPlayer() {
    const { setDataVideo, dataVideo } = useVideoHook()

    const player = useRef<MediaPlayerInstance>(null);
    const paused = useMediaState('paused', player);
    const playing = useMediaState('playing', player);

    const sliderRef = useRef<TimeSliderInstance>(null);
    const isDragging = useSliderState('dragging', sliderRef);


    const { dragging, pointing, active } = useStore(TimeSliderInstance, sliderRef);


    function onPlay(nativeEvent: MediaPlayEvent) {
        // request events are attached to media events
        const playRequestEvent = nativeEvent.request; // MediaPlayRequestEvent

        // console.log(playRequestEvent)

        // if (playRequestEvent) setIsPlaying(true)
    }
    function onPause(nativeEvent: MediaPlayEvent) {
        // request events are attached to media events
        const playRequestEvent = nativeEvent.request; // MediaPlayRequestEvent

        // console.log(playRequestEvent)

        // if (playRequestEvent) setIsPlaying(false)
    }

    useEffect(() => {

        console.log(playing)
        const sliderValue = Slider.Value;



    }, [playing])

    return (
        <div className="p-0 m-0 flex ">
            <MediaPlayer ref={player} onPause={onPause} onPlay={onPlay} src={`https://www.youtube.com/watch?v=${dataVideo && dataVideo.id}`} autoPlay
                className="relative h-[36rem] max-w-[70rem]   flex justify-end flex-col">
                <MediaProvider className="absolute h-full" />

                <div className="  absolute z-10 w-full h-12  flex items-center px-2  bottom-2 gap-2  ">
                    <PlayButton
                        className="text-white bg-gray-500/20 h-full w-10 rounded-md flex items-center justify-center transition duration-200 hover:bg-gray-500/70"
                    >{playing ? <Pause /> : <Play />}</PlayButton>



                    <div className="bg-gray-500/20 rounded-md p-1 w-full flex items-center transition duration-200 hover:bg-gray-500/70">
                        <TimeSlider.Root ref={sliderRef} className="group   rounded-lg relative mx-[10px] inline-flex h-10 w-[90%] cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
                            <TimeSlider.Track className="relative ring-sky-400 z-0 h-[5px] w-full rounded-sm bg-white/30 group-data-[focus]:ring-[3px]">
                                <TimeSlider.TrackFill className="bg-indigo-400 absolute h-full w-[var(--slider-fill)] rounded-sm will-change-[width]" />
                                <TimeSlider.Progress className="absolute z-10 h-full w-[var(--slider-progress)] rounded-sm bg-white/50 will-change-[width]" />
                            </TimeSlider.Track>
                            <TimeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
                        </TimeSlider.Root>
                        <div className="ml-1.5 flex items-center text-sm font-medium">
                            <Time className="time" type="current" />
                            <div className="mx-1 text-white/80">/</div>
                            <Time className="time" type="duration" />
                        </div>
                    </div>

                </div>
                <Gesture
                    className="pointer-coarse:hidden absolute inset-0 z-0 block h-full w-full"
                    event="pointerup"
                    action="toggle:paused"
                />

                <Gesture
                    className="absolute inset-0 z-0 block h-full w-full"
                    event="dblpointerup"
                    action="toggle:fullscreen"
                />

            </MediaPlayer>
        </div>
    )
}