"use client"

import * as card from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'

import Image from 'next/image'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HomeIcon, LogIn, User } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"

const userCart: Object[] = []

export default function Page() {
  return (
    <div className='pt-sans-regular'>
      <Header />
      <Carousel className='w-screen h-screen' orientation='horizontal'
        opts={{ align: 'start', loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Image priority src={"https://picsum.photos/1920/1080"} width={1920} height={1080} className='w-screen h-full rounded shadow-lg' alt='' />
                <div className='flex w-full items-center justify-center'>
                  <Button className='w-1/16 mt-4 text-xl bg-red-500 rounded shadow-2xl'>Learn more</Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel><br />
      <Separator />
      <MainSection />
      <Footer />
    </div>
  )
}

export function ProductCard({ title, category, price, brand, rating, imageUrl, imgW, imgH, addToCard }: { title: string, category: string, price: number, brand: string, rating: number, imageUrl: string, imgW: number, imgH: number, addToCard: boolean }) {
  return (
    <>
      <card.Card className="text-center w-96 md:h-256 shadow-lg h-auto duration-500 sm:w-full">
        <Link href={{ pathname: '/product', query: { title: title, category: category, price: price, brand: brand, rating: rating, imageUrl: imageUrl } }}>
          <card.CardHeader>
            <card.CardTitle>{title}</card.CardTitle>
          </card.CardHeader>
          <card.CardContent>
            <Image src={imageUrl} alt='' priority={true} width={imgW} height={imgH} className='w-96 min-h-64 max-h-[50vh]' />
            <div className='flex justify-end'>
              <div className='flex justify-self-end bg-red-500 rounded-lg rotate-30 skew-y-6 w-48 -translate-y-6 translate-x-3 shadow-lg justify-center'>
                <span className='text-white font-black text-3xl select-none'>{price + '$'}</span>
              </div>
              <br />
            </div>
            {brand} <br />
            <div className='bg-yellow-400' style={{ width: rating * 10 }}>&nbsp;</div>
          </card.CardContent>
        </Link>
        <card.CardFooter className='flex justify-center w-full'>
          {addToCard ?
            <Button className='w-full hover:bg-red-500 text-lg duration-250' onClick={function (event: any) { console.log(title.replaceAll(' ', '')) }}>Add to the cart</Button>
            : <></>
          }
        </card.CardFooter>
      </card.Card >
    </>
  )
}

export function Header() {
  return (
    <header className='w-screen'>
      <div className='header-container flex flex-row justify-between'>
        <div id='header-menu' className="flex flex-row justify-between text-center w-64 h-full p-3">
          <div className='inline-block header-menu-item w-32 min-h-16 h-full'><Link href='/'><HomeIcon /></Link></div>
          <div className='inline-block header-menu-item w-32 min-h-16 h-full'><Link href='#'><User /></Link></div>
          <div className='inline-block header-menu-item w-32 min-h-16 h-full'><Link href='./login'><LogIn /></Link></div>
        </div>
        <div className="logo whitespace-nowrap pr-1 pl-1 flex justify-end items-center text-xl mr-16"><Link href={"/"}><b><i>Dummy Products</i></b></Link></div>
      </div>
    </header>
  )
}

function MainSection() {
  const [productsData, setProductsData] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      setProductsData(data.products)
    }

    fetchData()
  }, []);

  return (
    <main className='lg:grid lg:grid-cols-4 lg:grid-flow-dense gap-5 p-4 sm:grid-cols-1 sm:flex sm:justify-center sm:flex-col sm:flex-wrap sm:grow'>
      {productsData.map(product => <div key={product.id}><ProductCard imgW={300} imgH={300} addToCard={true} title={product.title} brand={product.brand} category={product.category} price={product.price} rating={product.rating} imageUrl={product.images[0]} /></div>)}
    </main>
  )
}

const Footer = () => {
  return (
    <footer className='section'>
      <h3>Footer</h3>
    </footer>
  )
}