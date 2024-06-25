import * as card from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function ProductCard({ title, category, price, brand, rating, imageUrl, imgW, imgH, addToCard }: { title: string, category: string, price: string, brand: string, rating: any, imageUrl: string, imgW: number, imgH: number, addToCard: boolean }) {
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
                    <Button className='w-full hover:bg-red-500 text-lg duration-500 lg:p-2 lg:text-xl sm:text-3xl sm:p-8' onClick={function (event: any) { }}>Add to the cart</Button>
                </card.CardFooter>
            </card.Card >
        </>
    )
}
