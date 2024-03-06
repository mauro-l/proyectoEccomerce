import { useEffect, useState } from "react"
import { getProducts } from "../../../asyncMock"
import Card from '../../Cards/Card'

function Products() {

    const [product, setProduct] = useState([])

    useEffect(()=>{
        getProducts()
        .then(res=>setProduct(res)).catch(err => console.log('error al cargar productos en el home: ', err))
    },[])

    const newProduct = [...product];
    const productItem = newProduct.slice(0,8);

    return (
        <div className="container mx-auto flex flex-col flex-wrap justify-center p-8">
            <article className="flex items-end justify-between my-2">
                <div>
                    <h3 className="text-gray-500 text-xl py-2">Comics & Mangas</h3>
                    <h2 className="text-3xl md:text-4xl">Todos nuestros productos</h2>
                </div>
                <div className="px-3 hover:text-red-600 hover:underline transition-all">
                    <button className="flex items-center text-2xl md:text-3xl">
                        Ver mas
                        <svg className="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </article>
            <article className="flex mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {productItem.map(item=>(<Card key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} />))}
                </div>
            </article>
        </div>
    )
}

export default Products