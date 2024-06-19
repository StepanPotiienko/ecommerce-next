import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card'
import Image from 'next/image';

function ProductCard({ title, category, price, brand, sale, rating, imageUrl }: { title: string, category: string, price: number, brand: string, sale: number, rating: string, imageUrl: string }) {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={imageUrl} alt='' width={300} height={300} />
        <div className='flex justify-end'>
          <div className='flex justify-self-end bg-red-500 rounded-lg rotate-30 skew-y-6 w-48 -translate-y-6 shadow-lg justify-center'>
            <span className='text-white text-lg font-black text-3xl'>{price + '₴'}</span>
          </div>
          <br />
        </div>
        {brand} <br />
        {sale > 0 ? <span>{sale}</span> : <></>}
      </CardContent>
      <CardFooter>
        {rating}
      </CardFooter>
    </Card>
  )
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductCard title='Hello World!' price={24.5} category='Clothes' brand='Nike' sale={0} rating='4.5/5' imageUrl="https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></ProductCard>
    </main>
  );
}
