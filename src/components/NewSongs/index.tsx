import React from 'react'
import './newSongs.css'
import SongCard from './SongCard'
interface Props {
  title: string
}

const NewSongs: React.FC<Props> = () => {
  return (
    <div className="new-songs">
      <SongCard
        title="Tiago PZK - Ainda Bem - Bzrp Music Sessions 45"
        singer="Tones and I"
        image="https://images.unsplash.com/photo-1510759302203-56a281488e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <SongCard
        title="Tiago PZK - Ainda Bem - Bzrp Music Sessions 45"
        singer="Tones and I"
        image="https://images.unsplash.com/photo-1510759302203-56a281488e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <SongCard
        title="Tiago PZK - Ainda Bem - Bzrp Music Sessions 45"
        singer="Tones and I"
        image="https://images.unsplash.com/photo-1510759302203-56a281488e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <SongCard
        title="Tiago PZK - Ainda Bem - Bzrp Music Sessions 45"
        singer="Tones and I"
        image="https://images.unsplash.com/photo-1510759302203-56a281488e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <SongCard
        title="Tiago PZK - Ainda Bem - Bzrp Music Sessions 45"
        singer="Tones and I"
        image="https://images.unsplash.com/photo-1510759302203-56a281488e88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwYWxidW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  )
}

export default NewSongs
