
import funkoImg from './FunkoPop.webp'
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
/* import 'swiper/css/pagination'; */

import './funko.css';

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { getProducts } from '../../../asyncMock';

function Funko() {

    const [funkoCard, setFunkoCard] = useState([]);
    const [swipperReady, setSwipperReady] = useState(false);

    useEffect (()=>{
        getProducts()
        .then(res => {
            setFunkoCard(res)
            setSwipperReady(true)
        })
        .catch(err => console.log('error al traer los productos: ', err))
    }, [])

    let cardList = [...funkoCard];
    let newFunkoCards = cardList.slice(2, 9);

    return (
        <section className='background flex flex-col md:flex-row mt-8'>
            <article className='flex flex-col justify-center mx-auto w-1/2 md:w-1/3 mt-3 md:p-4'>
                <h3 className='text-3xl md:text-4xl text-tgray pt-3'>No te pierdas los mejores...</h3>
                <img src={funkoImg} alt="funkoLogo" />
            </article>
            <article className='flex mx-auto justify-center items-center w-3/5 md:w-1/3 py-5'>
                {swipperReady && (
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 70,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="mySwiper"
                    >
                        {newFunkoCards.map(itemCard =>(
                            <SwiperSlide key={itemCard.id}>
                                <img src={itemCard.img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </article>
        </section>
      );
    }

export default Funko