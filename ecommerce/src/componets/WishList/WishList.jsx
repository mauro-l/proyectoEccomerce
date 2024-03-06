
import example from '../../assets/example.jpg'
import Banner from '../Banner/Banner'

function WishList() {
  return (
    <>
        <Banner greeting={'Lista de deseos'} />
        <section className="container mx-auto p-8">
            <article className="relative overflow-x-auto  sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-sm text-gray-700 uppercase bg-[#F2F4F7] dark:bg-gray-700 dark:text-gray-400">
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
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#f2f4f7] dark:hover:bg-gray-600 md:table-row flex flex-col items-center">
                            <td className="p-2 md:p-4 flex flex-col md:flex-row items-center">
                                <button className='md:me-4 text-xl text-black/50 font-roboto'>X</button>
                                <img src={example} className="w-32 h-32 max-w-full max-h-full" alt="Apple Watch"/>
                                <div className="px-3 py-2 md:px-6 md:py-4 font-semibold md:font-normal text-xl text-gray-900 dark:text-white">
                                    Apple Watch
                                </div>
                            </td>
                            <td className="px-3 py-2 md:px-6 md:py-3 font-semibold md:font-normal text-lg text-center text-gray-900 dark:text-white">
                                $599
                            </td>
                            <td className="px-3 py-2 md:px-6 md:py-4">
                                <p className="font-medium text-lg text-center text-green-600 dark:text-green-500 hover:underline">En Stock</p>
                            </td>
                            <td className="px-3 py-2 md:px-6 md:py-4 order-5 hidden md:block text-center">
                                <button className="font-medium text-white bg-[#6FC9CD] px-14 py-4">Add to cart</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
            <article className='p-4 w-full flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-auto flex items-center gap-2 py-1 md:my-5'>
                    <select className='w-2/3 border-[#D8DEE6] text-sm text-gray-500 font-roboto' name="actions" id="favActions">
                        <option className='text-gray-400' value="Actions" disabled>Actions</option>
                        <option value="add">Agregar todos al carrito</option>
                        <option value="remove">Vaciar carrito</option>
                    </select>
                    <button className='w-1/3 flex justify-center bg-esky text-white md:text-sm px-8 py-2.5 md:py-2'><p className=''>Aplicar</p></button>
                </div>
                <div className='flex flex-col w-full md:flex-row md:w-auto md:gap-3 text-lg md:text-base'>
                    <button className='bg-esky text-white my-1 py-2.5 md:py-2 md:px-6'>Ver mas productos</button>
                    <button className='bg-esky text-white my-1 py-2.5 md:py-2 md:px-6'>Ir al carrito</button>
                </div>
            </article>
        </section>    
    </>
  )
}

export default WishList