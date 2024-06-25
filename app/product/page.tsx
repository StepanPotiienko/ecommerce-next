"use client"

import { useSearchParams } from 'next/navigation';

import { Header } from "../page"
import Image from 'next/image';

const Page = () => {
    const searchParams = useSearchParams()

    const title: string | null = searchParams.get('title')
    const category: string | null = searchParams.get('category')
    const brand: string | null = searchParams.get('brand')
    const price: string | null = searchParams.get('price')
    const rating: string | null = searchParams.get('rating')
    const imageUrl: string | null = searchParams.get('imageUrl')

    return (
        <>
            <Header />
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <Image alt={title || ""} src={imageUrl || ""} width={1920} height={1080} className='w-screen max-w-screen-lg h-screen max-h-screen'></Image>
                <h1 className='text-2xl'>{title}</h1>
                <div id='description' className='flex flex-col'>
                    <ul>
                        <li>Category: {category}</li>
                        <li>Brand: {brand}</li>

                    </ul>
                </div>
                <div className='flex justify-end mt-16'>
                    <div className='flex justify-self-end bg-red-500 rounded-lg rotate-30 skew-y-6 w-48 -translate-y-6 translate-x-3 shadow-lg justify-center'>
                        <span className='text-white font-black text-3xl select-none'>{price + '$'}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page