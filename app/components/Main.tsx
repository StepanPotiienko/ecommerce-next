import { useEffect, useState } from 'react'

import { ProductCard } from './ProductCard';

export function MainSection() {
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
