import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import MusicCard from './MusicCard'

const SliderMuisic = () => {
  return (
    <Swiper
      slidesPerView={1.25}
      className="my-3"
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      breakpoints={{
        640: {
          slidesPerView: 3.05,
        },
        768: {
          slidesPerView: 4.5,
        },
      }}
    >
      <SwiperSlide>
        <MusicCard
          title="El desesperado"
          singer="Andrés Cepeda"
          image="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MusicCard
          title="El desesperado"
          singer="Andrés Cepeda"
          image="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MusicCard
          title="El desesperado"
          singer="Andrés Cepeda"
          image="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MusicCard
          title="El desesperado"
          singer="Andrés Cepeda"
          image="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
      <SwiperSlide>
        <MusicCard
          title="El desesperado"
          singer="Andrés Cepeda"
          image="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default SliderMuisic
