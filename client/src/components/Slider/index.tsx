import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel-channel";

export function Slider() {

    return (

        <Carousel className="border border-red-500 " >
            <CarouselContent>
                <CarouselItem className="w-full h-[296px]">
                    <Image src="/assets/felipe.jpeg" width={100} height={100} alt="Image1" />
                </CarouselItem>
                <CarouselItem className="w-full">
                    <Image src="/assets/felipe.jpeg" width={100} height={100} alt="Image1" />
                </CarouselItem>
                <CarouselItem className="w-full">
                    <Image src="/assets/felipe.jpeg" width={100} height={100} alt="Image1" />
                </CarouselItem>
            </CarouselContent>

        </Carousel>
    )
}