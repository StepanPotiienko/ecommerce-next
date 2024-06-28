"use client"

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'

import Image from 'next/image'

import Autoplay from "embla-carousel-autoplay"

import { MainSection } from './components/Main'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { isLoggedIn } from './UserSettings'

// TODO: Add functionality to add products to the card and then place an order.
const userCart: Object[] = []

export default function Page() {
  return (
    <div className='lato-regular'>
      <Header isLoggedIn={isLoggedIn} />
      <div className='flex flex-col items-center justify-center lg:mt-3 sm:mt-0'>
        <Carousel className='lg:w-3/4 lg:h-1/4 sm:h-full sm:w-screen' orientation='horizontal'
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Image priority src={"https://picsum.photos/1920/1080"} width={1920} height={1080} className='w-screen h-full shadow-lg' alt='' />
                  <div className='flex w-full items-center justify-center'>
                    <Button className='w-1/16 mt-4 text-xl duration-500 bg-red-500 rounded shadow-2xl sm:text-2xl sm:p-6'>Learn more</Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel></div>
      <br />
      <Separator />
      <MainSection />
      <Footer />
    </div>
  )
}

