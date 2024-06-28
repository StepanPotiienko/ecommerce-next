import * as card from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


function Rating({ stars }: { stars: number }) {
    const starsDisplay: JSX.Element[] = []

    for (let i = 1; i < stars; i++) {
        starsDisplay.push(
            <svg key={i} className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20" >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg >
        )
    }

    return (
        <div className='flex items-center justify-center'>
            {starsDisplay}
            <p className='ms-1 text-sm font-medium text-gray-500 dark:text-gray-400'>{stars} out of 5.</p>
        </div>
    )
}


export function ProductCard({ title, category, price, brand, rating, imageUrl, imgW, imgH, addToCard }: { title: string, category: string, price: string, brand: string, rating: number, imageUrl: string, imgW: number, imgH: number, addToCard: boolean }) {
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
                            <div className='flex justify-self-end bg-red-500 rounded-lg skew-y-6 w-24 shadow-lg justify-center'>
                                <span className='text-white font-black select-none sm:text-3xl sm:p-4 lg:p-1 lg:text-2xl'>{price + ' $'}</span>
                            </div>
                            <br />
                        </div>
                        <span className='text-xl'>{brand}</span> <br />
                        <Rating stars={rating} />
                    </card.CardContent>
                </Link>
                <card.CardFooter className='flex justify-center w-full'>
                    <Button className='w-full hover:bg-red-500 text-lg duration-500 lg:p-2 lg:text-xl sm:text-3xl sm:p-8' onClick={function (event: any) { }}>Add to the cart</Button>
                </card.CardFooter>
            </card.Card >
        </>
    )
}
