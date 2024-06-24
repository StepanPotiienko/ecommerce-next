"use client"

import { useSearchParams } from 'next/navigation';

import { Header, ProductCard } from "../page";


const Page = () => {
    const searchParams = useSearchParams()

    const title: string | null = searchParams.get('title')
    const category: string | null = searchParams.get('category')
    const price: string | null = searchParams.get('price')
    const rating: string | null = searchParams.get('rating')
    const imageUrl: string | null = searchParams.get('imageUrl')

    return (
        <>
            <Header />
            <ProductCard title={title || ""} category={category || ""} price={price || 0} rating={rating || 0} imageUrl={imageUrl || ""} imgW={500} imgH={500} addToCard={false}></ProductCard>
        </>
    )
}

export default Page