import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import './songCard.css'

interface Props {
  title: string
  singer: string
  image: string
}

const SongCard: React.FC<Props> = ({ title, singer, image }) => {
  return (
    <div className="song-card">
      <div className="content">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="text">
          <h3 className="text-sm text-white">{title}</h3>
          <span className="text-xs text-grey2">{singer}</span>
        </div>
        <div className="points">
          <HiDotsHorizontal size={25} />
        </div>
      </div>
      <hr className="divider" />
    </div>
  )
}

export default SongCard
