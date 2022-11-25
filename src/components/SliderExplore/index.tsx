import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './sliderExplore.css'
import data from '../../db/explore.json'

import LargeCard from './LargeCard'

const SliderExplore = () => {
  return (
    <Swiper
      className="swiper-container"
      slidesPerView={1.05}
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
          slidesPerView: 1.25,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2.4,
          spaceBetween: 5,
        },
        992: {
          slidesPerView: 1.5,
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
            <LargeCard
              textImageCard={item.textImageCard}
              categoryCard={item.categoryCard}
              titleCard={item.titleCard}
              subtitleCard={item.subtitleCard}
              imageCard={item.imageCard}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default SliderExplore
