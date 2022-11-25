import React from 'react'
import './title.css'

type Size = 'text-lg' | 'text-xl' | 'text-2xl'

interface Props {
  title: string
  size: Size
}
const Title: React.FC<Props> = ({ title, size = 'text-2xl' }) => {
  return <h2 className={`title ${size} text-white my-2 font-bold`}>{title}</h2>
}

export default Title
