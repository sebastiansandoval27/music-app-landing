import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import LargeCard from './LargeCard'

const SliderExplore = () => {
  return (
    <Swiper
      slidesPerView={1.05}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      breakpoints={{
        640: {
          slidesPerView: 2.05,
        },
        768: {
          slidesPerView: 3.6,
        },
      }}
    >
      <SwiperSlide>
        <LargeCard
          textImageCard="The Weeknd"
          categoryCard="Musica pop latino"
          titleCard="¡Dale play!"
          subtitleCard="NUEVA MUSICA"
          imageCard="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LargeCard
          textImageCard="The Weeknd"
          titleCard="Cinco artistas para tener en cuenta"
          subtitleCard="PREDICCIONES DE SHAZAM"
          imageCard="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LargeCard
          textImageCard="The Weeknd"
          categoryCard="Musica pop latino"
          titleCard="¡Dale play!"
          subtitleCard="NUEVA MUSICA"
          imageCard="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <LargeCard
          textImageCard="The Weeknd"
          titleCard="Cinco artistas para tener en cuenta"
          subtitleCard="PREDICCIONES DE SHAZAM"
          imageCard="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default SliderExplore
