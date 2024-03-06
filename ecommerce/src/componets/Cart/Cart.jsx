
import { Tooltip } from 'flowbite-react';
import example from '../../assets/example.jpg';
import Banner from '../Banner/Banner';
import ItemCount from '../ItemCount/ItemCount';
import arrow from './arrow.svg'
import { Link } from 'react-router-dom';

function WishList() {
  return (
    <>
        <Banner greeting={'Carrito'} />
        <section className='p-10 mt-6'>
            <ul className='flex flex-col md:flex-row md:justify-center gap-10 text-lg'>
                <li><span className='bg-esky text-white px-3.5 py-2 me-4'>1</span>Carrito de compras</li>
                <li className='md:block hidden'><img src={arrow} alt="" /></li>
                <li><span className='bg-black text-white px-3.5 py-2 me-4'>2</span>Opciones de pago y envio</li>
                <li className='hidden md:visible'><img src={arrow} alt="" /></li>
                <li><span className='bg-black text-white px-3.5 py-2 me-4'>3</span>Resumen de compra</li>
            </ul>
        </section>
        <section className="container mx-auto p-8">
            <article className="relative overflow-x-auto  sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-tgray dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3 text-center text-lg md:text-sm">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-center hidden md:table-cell">
                                Stock
                            </th>
                            <th scope="col" className="px-16 py-3 text-center hidden md:table-cell">
                                Subtotal
                            </th>
                            <th scope="col" className="px-16 py-3 text-center hidden md:table-cell">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-tgray dark:hover:bg-gray-600 md:table-row flex flex-col">
                            <td className="p-2 md:p-4 flex flex-row justify-between md:justify-start items-center">
                                {/* <button className='md:me-4 text-xl text-black/50 font-roboto'>X</button> */}
                                <img src={example} className="w-20 h-20 max-w-full max-h-full" alt="Apple Watch"/>
                                <div className="px-3 py-2 md:px-6 md:py-4 md:font-normal text-xl text-gray-900 dark:text-white">
                                    <Tooltip content={'Apple Watch 14pro max 134 fpas fkdk'} >
                                        <p className='max-w-36 truncate cursor-default'>
                                            Apple Watch 14pro max 134 fpas fkdk
                                        </p>
                                    </Tooltip>
                                </div>
                            </td>
                            <td className="px-3 py-2 flex justify-between md:table-cell md:px-6 md:py-3 md:font-normal text-lg text-center text-gray-900 dark:text-white">
                                <p className='md:hidden'>price:</p>
                                <p>$599</p>
                            </td>
                            <td className="px-3 py-2 flex justify-between md:table-cell items-center md:px-6 md:py-3 md:font-normal text-lg text-center text-gray-900 dark:text-white">
                                <div className='flex justify-between items-center w-full md:justify-center'>
                                    <p className='md:hidden'>Cantidad</p>
                                    <ItemCount />
                                </div>
                            </td>
                            <td className="px-3 py-2 flex justify-between md:table-cell md:px-6 md:py-3 md:font-normal text-lg text-center text-gray-900 dark:text-white">
                                <p className="font-medium text-lg text-center hover:underline md:hidden">Subtotal</p>
                                <p className="font-medium text-lg text-center hover:underline">$599</p>
                            </td>
                            <td className="px-3 py-2 md:px-6 md:py-4 order-5 text-center md:table-cell">
                                <button className="text-lg text-white bg-ered w-full md:px-14 py-2">Remove</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <article className='p-4 w-full flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-2/5 mb-1 md:mb-0'>
                    <form>
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Hola</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ticket" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 5l0 2" /><path d="M15 11l0 2" /><path d="M15 17l0 2" /><path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
                                </svg>
                            </div>
                            <input type="search" id="search" className="block w-full p-4 md:py-2 ps-10 text-sm text-gray-900 border border-gray-300 bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-gray-500 focus:border-gray-500" placeholder="Codigo descuento" required />
                            <button type="submit" className="absolute end-2 bottom-2.5 md:bottom-0 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-4 py-2 border-l border-gray-300">Apply cupon</button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col w-full md:flex-row md:w-auto md:gap-3 text-lg md:text-base'>
                    <button className='bg-tgray my-1 py-2.5 md:py-2 md:px-6'>Continuar comprando</button>
                    <button className='bg-black/25 text-white my-1 py-2.5 md:py-2 md:px-6' disabled>Actualizar carrito</button>
                </div>
            </article>
        </section>
        <section className="container mx-auto px-10 md:flex md:justify-end">
            <article className='md:w-2/5 mb-12'>
                <h2 className='py-4 text-xl'>Cart Total</h2>
                <div className="relative overflow-x-auto border-2 border-gray-100 sm:rounded-lg">
                    <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Subtotal
                                </th>
                                <td className="px-6 py-4 text-black">
                                    $2999
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Shipping
                                </th>
                                <td className="px-6 py-4 text-black font-roboto">
                                    <select name="envios" id="envios" className='border-gray-100'>
                                        <option value="retiro">Retiro en tienda</option>
                                        <option value="domicilio">Envio a domicilio</option>
                                        <option value="correo">Retiro en correo</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    Total
                                </th>
                                <td className="px-6 py-4 text-black">
                                    $145.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Link to={'/cart/checkout'}>
                    <button className='bg-esky py-2 w-full text-white my-3 border border-white'>Continuar con el pago</button>
                </Link>
            </article>
        </section>
    </>
  )
}

export default WishList