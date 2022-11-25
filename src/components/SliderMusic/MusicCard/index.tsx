import React from 'react'
import './musicCard.css'
import { FaPlay } from 'react-icons/fa'
interface Props {
  title: string
  singer: string
  image: string
}

const MusicCard: React.FC<Props> = ({ title, image, singer }) => {
  return (
    <div className="music-card">
      <div className="image">
        <img src={image} alt={singer} />
        <div className="shadow">
          <FaPlay />
        </div>
      </div>
      <div className="text">
        <h3 className="text-title">{title}</h3>
        <span className="text-singer">{singer}</span>
      </div>
    </div>
  )
}

export default MusicCard
