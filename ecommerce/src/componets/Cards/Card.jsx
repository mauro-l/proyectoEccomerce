
//import img from '../../assets/example.jpg'
import { Link } from 'react-router-dom'
import StartRating from '../Starts/StartRating'
import addCart from '../icons/shopping-cart-plus.svg'

function Card({id, img, imgML, category, name, title, price}) {

    /* let nameUrl = '';
    let titleUrl = ''; */
    //let imgML = `https://http2.mlstatic.com/D_NQ_NP_${imgML}-O.webp`;

    const pic =!category ? imgML : img;

    /* const nameUrl = name ? name.replace(/\. /g, "-").replace(/\s/g, "-") : null;
    const titleUrl = title? title.replace(/-/g, "").replace(/\s+/g, "-") : null;
 */

    return (
        <div className="flex justify-center gap-3">
            <div className="relative max-w-xs w-60 bg-white border border-transparent md:hover:bg-[#F2F4F7] md:hover:border-x-2 md:hover:border-t-2 md:hover:border-gray-200 transition duration-300 dark:bg-gray-800 dark:border-gray-700 px-1 py-4 space-y-4 group">
                <Link to={`/${category ? 'f' : 'p'}/${id}`}>
                    <img width={400} height={600} className='object-contain object-center w-56 h-64 mx-auto' src={pic} alt={`${name}${id}`} />
                </Link>
                <div className="px-4">
                    <h5 className="mb-2 text-2xl tracking-tight text-gray-900 truncate cursor-default dark:text-white">{name || title}</h5>
                    <div className="flex items-center justify-between min-h-4">
                        <p className="text-2xl text-[#797C7F] dark:text-white text-center mr-4">${price}</p>
                        <StartRating />
                    </div>
                    <div className='absolute left-0 z-10 lg:opacity-0 bg-white lg:bg-tgray lg:border-b-2 lg:border-x-2 md:border-gray-200 group-hover:opacity-100 transition-opacity duration-300 px-4 pb-4 w-60 -m-[2px]'>
                        <div className='px-4 mt-2'>
                            <Link to={`/shop/p/${id}`}>
                                <button className="flex items-center content-center justify-center w-full p-3 font-medium text-center text-white bg-black">
                                    <img src={addCart} className='me-2' alt="cart-plus svg" />
                                    AGREGAR AL CARRITO
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card