
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import MiniCard from './MiniCard';
import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';

function Novedades() {

    const [card, setCard] = useState([]);
    const [swipperReady, setSwipperReady] = useState(false);

    useEffect (()=>{
        getProducts()
        .then(res => {
            setCard(res)
            setSwipperReady(true)
        })
        .catch(err => console.log('error al traer los productos: ', err))
    }, [])

    let cardList = [...card];
    let newCards = cardList.slice(2, 9);
  return (
    <div className='container p-12'>
        <h4 className='md:text-xl text-gray-500'>Producto</h4>
        <h2 className='text-2xl md:text-5xl'>Novedades</h2>
        {swipperReady && (
            <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
            >
            {newCards.map(itemCard =>(
                <SwiperSlide key={itemCard.id}>
                    <MiniCard img={itemCard.img} name={itemCard.name} price={itemCard.price} />
                </SwiperSlide>
            ))}
            </Swiper>
        )}
    </div>
  )
}

export default Novedades