"use client"

import * as card from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'

import Image from 'next/image'

import { ComponentElement, ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { HomeIcon, LogIn, ShoppingCart } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"

import { getSHA256Hash } from 'boring-webcrypto-sha256'

// TODO: Add functionality to add products to the card and then place an order.
const userCart: Object[] = []

const isLoggedIn: boolean = true

export default function Page() {
  return (
    <div className='lato-regular'>
      <Header />
      <Carousel className='w-screen h-screen sm:h-full' orientation='horizontal'
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
      </Carousel><br />
      <Separator />
      <MainSection />
      <Footer />
    </div>
  )
}

function ProductCard({ title, category, price, brand, rating, imageUrl, imgW, imgH, addToCard }: { title: string, category: string, price: string, brand: string, rating: any, imageUrl: string, imgW: number, imgH: number, addToCard: boolean }) {
  const productHash = getSHA256Hash((title + category + brand).replaceAll(" ", ""))

  return (
    <>
      <card.Card className="flex flex-col justify-between sm:justify-around items-center text-center w-64 shadow-lg lg:h-full sm:h-auto sm:min-h-[120vh] lg:max-h-[120vh] lg:min-h-full duration-500 sm:w-full">
        <Link href={{ pathname: '/product', query: { title: title, category: category, price: price, brand: brand, rating: rating, imageUrl: imageUrl } }}>
          <card.CardHeader>
            <card.CardTitle className='sm:text-4xl lg:text-2xl'>{title}</card.CardTitle>
          </card.CardHeader>
          <card.CardContent>
            <Image src={imageUrl} alt={title} priority={true} width={imgW} height={imgH} className="lg:w-64 sm:h-full sm:max-h-[75vh] sm:m-16 max-h-full min-h-64 sm:w-[60vw] sm:max-w-screen-sm"></Image>
            <div className='flex justify-end'>
              <div className='flex justify-self-end bg-red-500 rounded-lg rotate-30 skew-y-6 w-48 -translate-y-6 translate-x-3 shadow-lg justify-center'>
                <span className='text-white font-black text-3xl select-none sm:text-4xl sm:p-8 lg:p-1 lg:text-3xl'>{price + '$'}</span>
              </div>
              <br />
            </div>
            <span className='text-xl'>{brand}</span> <br />
            <div className='bg-yellow-400' style={{ width: rating * 10 }}>&nbsp;</div>
          </card.CardContent>
        </Link>
        <card.CardFooter className='flex justify-center w-full'>
          {addToCard ?
            <Button className='w-full hover:bg-red-500 text-lg duration-500 lg:p-2 lg:text-xl sm:text-3xl sm:p-8' onClick={function (event: any) { userCart.push(productHash); console.log(userCart) }}>Add to the cart</Button>
            : <></>
          }
        </card.CardFooter>
      </card.Card >
    </>
  )
}

export function Header(): any {
  return (
    <header className='w-screen'>
      <div className='header-container flex flex-row justify-between'>
        <div id='header-menu' className="flex flex-row text-center w-64 h-full">
          <Link href='/'><div className='inline-block header-menu-item w-16 min-h-16 h-full'><HomeIcon /></div></Link>
          {isLoggedIn && <Link href="#"><div className='inline-block header-menu-item w-16 min-h-16 h-full'><ShoppingCart /></div></Link> || <></>}
          <Link href='./login'><div className='inline-block header-menu-item w-16 min-h-16 h-full'><LogIn /></div></Link>
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