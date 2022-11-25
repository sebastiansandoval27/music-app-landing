import React from 'react'
import './largeCard.css'
import { BiPlay } from 'react-icons/bi'
interface Props {
  titleCard: string
  subtitleCard: string
  categoryCard?: string
  imageCard: string
  textImageCard: string
}

const LargeCard: React.FC<Props> = ({
  titleCard,
  subtitleCard,
  categoryCard,
  imageCard,
  textImageCard,
}) => {
  return (
    <div className="large-card h-auto">
      <div className="text">
        <span className=" p-0 m-0 text-xs subtitle-card">{subtitleCard}</span>
        <span className=" p-0 m-0 text-lg title-card">{titleCard}</span>
        {categoryCard && (
          <span className=" p-0 m-0 text-sm category-card">{categoryCard}</span>
        )}
      </div>
      <div className="image">
        <img src={imageCard} alt="image" />
        <div className="image-text">
          <span className="name">{textImageCard}</span>
          <button className="play">
            <BiPlay size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LargeCard
