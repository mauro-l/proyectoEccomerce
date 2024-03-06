
import send from './send.svg'
import './newsletter.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Newsletter() {

    useEffect(()=>{
        Aos.init();
    }, [])
  return (
    <section className="relative flex flex-col justify-center p-5 mb-10 md:h-[660px]">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='logoBg p-4 absolute left-0 -z-20 h-[600px]'></div>
        <article className='flex flex-col items-center md:text-2xl text-gray-600 p-2 md:p-4'>
            <img src={send} className='bg-esky rounded-full p-1' alt="news-logo" />
            <h3 className='text-center pt-2'>Suscribete a nuestro Newsletter <br /> y se el primero en enterarte de todas las novedades!</h3>
        </article>
        <article className='flex justify-center p-2'>
            <div className='w-full md:w-2/5 mb-1 md:mb-0'>
                <form>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Hola</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <img src={send} alt="news-logo" />
                        </div>
                        <input type="search" id="search" className="block w-full p-4 md:py-2 ps-10 text-sm text-gray-900 border border-gray-300 bg-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-gray-500 focus:border-gray-500" placeholder="otaku@newsletter.com" required />
                        <button type="submit" className="absolute end-2 bottom-2.5 md:bottom-0 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-4 py-2 border-l border-gray-300">Suscribete</button>
                    </div>
                </form>
            </div>
        </article>
    </section>
  )
}

export default Newsletter