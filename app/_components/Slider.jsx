import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

const Slider = ({ sliderList }) => {
    
    return (
        <Carousel>
            <CarouselContent>
                {sliderList.map((slider, index) => (
                    <CarouselItem key={index}>
                        <Card>
                            <CardContent>
                            <Image src={process.env.NEXT_PUBLIC_API_URL+slider?.image[0]?.url} alt="slider"
                            width={1000}
                            height={400}
                            className='w-full h-[200px] md:h-[400px] object-cover rounded-2xl' />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}

export default Slider