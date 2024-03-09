
import ItemCount from '../../ItemCount/ItemCount'
import example from '../../../assets/example.jpg'
import addCart from '../../icons/shopping-cart-plus.svg'
import StartRating from '../../Starts/StartRating'
import mini from './pagosImg'

const ItemDetail = (product) => {

    console.log('PRODUCT', product)
    const pic = product.pictures[0].url || null ;
    console.log( pic)
    //const pic = null

    return (
        <div className='p-4 md:p-6 container mx-auto space-y-4'>
            <section className='flex flex-col md:items-center md:flex-row my-5 px-14 mx-auto md:justify-center md:gap-4'>
                <picture><img src={pic || product.img} className='md:w-[350px] flex mx-auto py-2' alt={`${product.description}${product.name}`} /></picture>
                <article className='md:w-1/2 py-3 flex flex-col justify-start items-center mx-2'>
                    <div>
                        <div>
                            <p className='text-[#797C7F]'>{product.category}</p>
                            <h2 className='text-3xl'>{product.name || product.title}</h2>
                            <h3 className='text-gray-400 font-roboto my-1'>{product.licence}</h3>
                            <div className='flex flex-col md:flex-row items-center gap-2'>
                                <p className='text-xl me-3'>${product.price}</p>
                                <StartRating/>
                            </div>
                                
                        </div>
                        <div className='flex content-center items-center gap-3 my-5'>
                            <ItemCount stock={product.stock} />
                            <button className='bg-black text-white text-center text-xl md:text-lg md:py-2 md:px-5 py-3 px-7 flex'><img src={addCart} className="me-2 md:h-6" alt="iconCart" />ADD CART</button>
                            <button className='text-red-600 border border-stone-300 shadow rounded p-2 md:p-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>
                            </button>
                        </div>
                        <div className='py-3'>
                            <p className='text-lg'>Metodos de pago</p>
                            <ul className='flex space-x-2 my-2'>
                                <li><img src={mini.pago1} className='border border-stone-300 shadow rounded' alt="img checkout" /></li>
                                <li><img src={mini.pago2} className='border border-stone-300 shadow rounded' alt="img checkout" /></li>
                                <li><img src={mini.pago3} className='border border-stone-300 shadow rounded' alt="img checkout" /></li>
                                <li><img src={mini.pago4} className='border border-stone-300 shadow rounded' alt="img checkout" /></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-lg'>
                                <li>Genero: <span className='text-base text-gray-500/75 font-roboto'>Shonen</span></li>
                                <li>Stock: <span className='text-base text-gray-500/75 font-roboto'>10</span></li>
                                <li>Tags: <span className='text-base text-gray-500/75 font-roboto'>Aventura, Comedia</span></li>
                                <li>Estado: <span className='text-base text-gray-500/75 font-roboto'>En emision</span></li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            <section className='px-12 py-4'>
                <h2 className='text-2xl'>Caracteristicas</h2>
                <div><p className='font-roboto text-gray-500/70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio consequatur ipsum dignissimos maiores sapiente velit aperiam, molestias cupiditate mollitia eligendi expedita laudantium, ut animi? Fuga ipsam distinctio neque temporibus totam!</p></div>
            </section>
            <section className='px-12'>
                <p className='text-2xl'>Productos Relacionados</p>
                <figure className='flex flex-col md:flex-row gap-3 text-xl'>
                    <a href='#'><img src={example} className='py-3' alt="" /><h3>Titulo recomendado</h3><p className='text-gray-400 text-lg'>US$30.00</p></a>
                    <a href='#'><img src={example} className='py-3' alt="" /><h3>Titulo recomendado</h3><p className='text-gray-400 text-lg'>US$30.00</p></a>
                    <a href='#'><img src={example} className='py-3' alt="" /><h3>Titulo recomendado</h3><p className='text-gray-400 text-lg'>US$30.00</p></a>
                </figure>
            </section>
        </div>
    )
}

export default ItemDetail