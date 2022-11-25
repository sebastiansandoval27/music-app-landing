import MainLayout from './components/Layouts/MainLayout'
import Title from './components/Title'
import Subtitle from './components/Subtitle/index'
import Slider from './components/SliderExplore'
import SliderMuisic from './components/SliderMusic'
import './app.css'
import NewSongs from './components/NewSongs/index'

function App() {
  return (
    <MainLayout>
      <div className="container">
        <section className="main-section mt-8">
          <Title title="Explorar" size="text-2xl" />
          <Slider />
        </section>
        <section className="main-section mt-8">
          <Subtitle
            title="Año nuevo, vida nueva"
            size="text-md"
            titleButton="Ver todo"
          />
          <SliderMuisic />
        </section>
        <section className="main-section mt-8">
          <Subtitle
            title="Música nueva"
            size="text-md"
            titleButton="Ver todo"
          />
          <SliderMuisic />
        </section>
        <section className="main-section mt-8">
          <Subtitle
            title="Canciones nuevas"
            size="text-md"
            titleButton="Ver todo"
          />
          <NewSongs title="New Songs" />
        </section>
      </div>
    </MainLayout>
  )
}

export default App
