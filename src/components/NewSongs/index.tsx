import React from 'react'
import './newSongs.css'
import SongCard from './SongCard'
import data from '../../db/newSongs.json'
interface Props {
  title: string
}

const NewSongs: React.FC<Props> = () => {
  return (
    <div className="new-songs">
      {data &&
        data.map(item => (
          <SongCard
            key={item.id}
            title={item.title}
            singer={item.singer}
            image={item.image}
          />
        ))}
    </div>
  )
}

export default NewSongs
