"use client"


import * as card from '@/components/ui/card'
import { Button } from '@/components/ui/button'


import Image from 'next/image'


import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'


export default function Page() {
  return (
    <div className='pt-sans-regular'>
      <Header />
      <MainSection />
      <Footer />
    </div>
  )
}



function ProductCard({ title, category, price, brand, rating, imageUrl }: { title: string, category: string, price: number, brand: string, rating: number, imageUrl: string }) {
  return (
    <card.Card className="text-center w-96 md:h-256 shadow-lg h-auto duration-500 sm:w-full">
      <card.CardHeader>
        <card.CardTitle>{title}</card.CardTitle>
      </card.CardHeader>
      <card.CardContent>
        <Image src={imageUrl} alt='' priority={true} width={300} height={150} className='w-96 min-h-64 max-h-[50vh]' />
        <div className='flex justify-end'>
          <div className='flex justify-self-end bg-red-500 rounded-lg rotate-30 skew-y-6 w-48 -translate-y-6 translate-x-3 shadow-lg justify-center'>
            <span className='text-white font-black text-3xl select-none'>{price + '$'}</span>
          </div>
          <br />
        </div>
        {brand} <br />
        <div className='bg-yellow-400' style={{ width: rating * 10 }}>&nbsp;</div>
      </card.CardContent>
      <card.CardFooter className='flex justify-center w-full'>
        <Button className='w-full' onClick={function (event: any) { console.log(title.replaceAll(' ', '')) }}>Add to the cart</Button>
      </card.CardFooter>
    </card.Card >
  )
}


function Header() {
  return (
    <header className='section'>
      <div className='header-container'>
        <div id='header-menu' className="flex flex-row text-center w-16 h-full">
          <div className='inline-block header-menu-item'><a href='#'>Home</a></div>
          <div className='inline-block header-menu-item'><a href='#'>My account</a></div>
        </div>
      </div>
      <div className="logo"></div>
    </header >
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
      {productsData.map(product => <div key={product.id}><ProductCard title={product.title} brand={product.brand} category={product.category} price={product.price} rating={product.rating} imageUrl={product.images[0]} /></div>)}
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