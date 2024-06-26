
//Componentes
import { Tooltip } from 'flowbite-react';
import ItemCount from '../../ItemCount/ItemCount';

//imagenes
import example from '../../../assets/example.jpg';

export default function CartItem() {
  return (
    <>
        <tr className="flex flex-col bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-tgray dark:hover:bg-gray-600 md:table-row">
            <td className="flex flex-row items-center justify-between p-2 md:p-4 md:justify-start">
                {/* <button className='text-xl md:me-4 text-black/50 font-roboto'>X</button> */}
                <img src={example} className="w-20 h-20 max-w-full max-h-full" alt="Apple Watch"/>
                <div className="px-3 py-2 text-xl text-gray-900 md:px-6 md:py-4 md:font-normal dark:text-white">
                    <Tooltip content={'Apple Watch 14pro max 134 fpas fkdk'} >
                        <p className='truncate cursor-default max-w-36'>
                            Apple Watch 14pro max 134 fpas fkdk
                        </p>
                    </Tooltip>
                </div>
            </td>
            <td className="flex justify-between px-3 py-2 text-lg text-center text-gray-900 md:table-cell md:px-6 md:py-3 md:font-normal dark:text-white">
                <p className='md:hidden'>price:</p>
                <p>$599</p>
            </td>
            <td className="flex items-center justify-between px-3 py-2 text-lg text-center text-gray-900 md:table-cell md:px-6 md:py-3 md:font-normal dark:text-white">
                <div className='flex items-center justify-between w-full md:justify-center'>
                    <p className='md:hidden'>Cantidad</p>
                    <ItemCount />
                </div>
            </td>
            <td className="flex justify-between px-3 py-2 text-lg text-center text-gray-900 md:table-cell md:px-6 md:py-3 md:font-normal dark:text-white">
                <p className="text-lg font-medium text-center hover:underline md:hidden">Subtotal</p>
                <p className="text-lg font-medium text-center hover:underline">$599</p>
            </td>
            <td className="order-5 px-3 py-2 text-center md:px-6 md:py-4 md:table-cell">
                <button className="w-full py-2 text-lg text-white bg-ered md:px-14">Remove</button>
            </td>
        </tr>
    </>
  )
}
