import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import data from '../../db/music.json'

import MusicCard from './MusicCard'

const SliderMuisic = () => {
  return (
    <Swiper
      slidesPerView={1.25}
      className="my-3"
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        375: {
          slidesPerView: 1.15,
          spaceBetween: 5,
        },
        414: {
          slidesPerView: 1.45,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2.3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2.8,
          spaceBetween: 5,
        },
        992: {
          slidesPerView: 1.8,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
      }}
    >
      {data &&
        data.map(item => (
          <SwiperSlide key={item.id}>
            <MusicCard
              title={item.title}
              singer={item.singer}
              image={item.image}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default SliderMuisic
