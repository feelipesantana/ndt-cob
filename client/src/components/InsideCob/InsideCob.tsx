'use client'
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { DotButton } from "./DotButton";

export function InsideCob() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div className='mt-32'>
            <div className='w-full max-w-[1280px] mx-auto'>
                <h1 className=' mb-14 text-6xl leading-[83.2px] font-semibold  text-blue-default '>
                    POR DENTRO DO COB
                </h1>

                <div className='mt-14'>
                    <div>

                        <Carousel setApi={setApi} className="w-full max-w-xs">
                            <div className="absolute right-16 ">
                                <CarouselPrevious />
                                <CarouselNext />
                            </div>
                            <CarouselContent className="mt-10 w-full">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem key={index}>
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>


                        </Carousel>
                        <div className="py-2 text-center text-sm text-muted-foreground">

                            {Number(count)}
                            <div className="w-10 h-2 bg-blue-default rounded-lg" ></div>
                            Slide {current} of {count}
                            <div className="embla__dots">
                                {scrollSnaps.map((_, index) => (
                                    <DotButton
                                        key={index}
                                        onClick={() => scrollTo(index)}
                                        className={'embla__dot'.concat(
                                            index === selectedIndex ? ' embla__dot--selected' : ''
                                        )}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}