
import { useState } from 'react'
import icons from './icons/icons'
import { Link } from 'react-router-dom'

function FixedPanel() {

  const [isOpened, setOpened] = useState(false);
  const [asideContent, setAsideContent] = useState('');

  const openAside = (content) =>{
    setAsideContent(content);
    setOpened(true);
  }

  const closeAside = () =>{
    setOpened(false);
  }

  return (
    <div>
      <div  className='fixed right-0 z-10 transform -translate-y-1/2 top-1/2'>
        <button 
        data-drawer-target="default-sidebar" 
        data-drawer-toggle="default-sidebar" 
        aria-controls="default-sidebar" type="button"
        onClick={()=> openAside('cart')}
        className='flex items-center justify-center w-10 h-10 p-1 transition-all opacity-50 bg-ered md:h-14 md:w-14 hover:opacity-100'
        >
          <div className='absolute flex items-center justify-center w-10 h-10 p-1 md:h-14 md:w-14'>
            <img src={icons.carrito} className='w-7' alt="carrito" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-2 -start-2 dark:border-gray-900">20</div>
          </div>
          <Link to={'/cart'} ></Link>
        </button>
        <button 
          data-drawer-target="default-sidebar" 
          data-drawer-toggle="default-sidebar" 
          aria-controls="default-sidebar" type="button"
          onClick={()=> openAside('fav')}
          className='flex items-center justify-center w-10 h-10 p-1 my-1 transition-all opacity-50 bg-ered md:h-14 md:w-14 hover:opacity-100'
        >
            <img src={icons.favorito} className='w-7' alt="favoritos" />
        </button>
        <button 
          data-drawer-target="default-sidebar" 
          data-drawer-toggle="default-sidebar" 
          aria-controls="default-sidebar" type="button"
          onClick={()=> openAside('Descuentos')}
          className='flex items-center justify-center w-10 h-10 p-1 transition-all opacity-50 bg-ered md:h-14 md:w-14 hover:opacity-100'
        >
            <img src={icons.descuento} className='w-7' alt="nuevo" />
        </button>
      </div>
      {isOpened &&(
        <aside 
          className={`fixed top-0 right-0 z-40 w-64 lg:w-80 h-screen transition-transform ${isOpened? '-translate-x-full' : ''} translate-x-0`} 
          id="default-sidebar" 
          aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <button onClick={closeAside} className='px-4 py-2 text-white bg-black' >Cerrar Aside</button> 
              <h2>{asideContent}</h2>
              
              <Link to={`/${asideContent}`}><button onClick={closeAside} className='px-4 py-2 text-white bg-black'>Ir a {asideContent}</button></Link>
            </div>
        </aside>)
      }
    </div>
  )
}

export default FixedPanel