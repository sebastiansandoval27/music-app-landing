import React from 'react'
import './subtitle.css'

type Size = 'text-md' | 'text-xl' | 'text-2xl'

interface Props {
  title: string
  titleButton?: string
  size: Size
}

const Subtitle: React.FC<Props> = ({
  title,
  titleButton,
  size = 'text-lg',
}) => {
  return (
    <div className="subtitle w-full flex h-11 items-center justify-between">
      <h3 className={`${size} md:text-xl text-white `}>{title}</h3>
      <button
        className={`${size} md:text-xl bg-none border-none h-full text-primary60 font-bold`}
      >
        {titleButton}
      </button>
    </div>
  )
}

export default Subtitle
