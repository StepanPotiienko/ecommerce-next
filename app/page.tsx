"use client"

import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const url = "https://dummyjson.com/products"

function ProductCard({ title, category, price, brand, sale, rating, imageUrl }: { title: string, category: string, price: number, brand: string, sale: number, rating: number, imageUrl: string }) {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={imageUrl} alt='' priority={true} width={300} height={150} />
        <div className='flex justify-end'>
          <div className='flex justify-self-end bg-red-500 rounded-lg rotate-30 skew-y-6 w-48 -translate-y-6 translate-x-3 shadow-lg justify-center'>
            <span className='text-white text-lg font-black text-3xl'>{price + '₴'}</span>
          </div>
          <br />
        </div>
        {brand} <br />
        {sale > 0 && sale < 100 ? <span>{sale}</span> : <></>}
      </CardContent>
      <CardFooter>
        {rating}
      </CardFooter>
    </Card>
  )
}

export default function Home() {
  const [productsData, setProductsData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProductsData(data.products);
    }

    fetchData();
  }, []);

  return (
    <main>
      {productsData.map(product => <div key={product.id}><ProductCard title={product.title} brand={product.brand} category={product.category} price={product.price} sale={product.discountPercentage} rating={product.rating} imageUrl={product.images[0]} /></div>)}
    </main>
  )
}