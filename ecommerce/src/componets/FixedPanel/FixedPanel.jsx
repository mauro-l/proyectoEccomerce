
import icons from './icons/icons'
import { Link } from 'react-router-dom'

function FixedPanel() {
  return (
    
    <div className='fixed right-0 top-1/2 transform -translate-y-1/2 z-10'>
      <Link to={'/cart'} >
        <button className='bg-ered h-10 w-10 md:h-14 md:w-14 p-1 flex justify-center items-center opacity-50 hover:opacity-100 transition-all'>
          <div className='absolute h-10 w-10 md:h-14 md:w-14 p-1 flex justify-center items-center'>
            <img src={icons.carrito} className='w-7' alt="carrito" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -start-2 dark:border-gray-900">20</div>
          </div>
        </button>
      </Link>
      <Link to={'/fav'}>
        <button className='bg-ered h-10 w-10 md:h-14 md:w-14 p-1 my-1 flex justify-center items-center opacity-50 hover:opacity-100 transition-all'><img src={icons.favorito} className='w-7' alt="favoritos" /></button>
      </Link>
        <button className='bg-ered h-10 w-10 md:h-14 md:w-14 p-1 flex justify-center items-center opacity-50 hover:opacity-100 transition-all'><img src={icons.descuento} className='w-7' alt="nuevo" /></button>
    </div>
  )
}

export default FixedPanel