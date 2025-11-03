// rafce
import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({photos}) => {
  return (
    photos.map((photo) => (
      <Imagem 
        key={photo.id}
        src={photo.src.small}
        alt={photo.alt}
      />
    ))
  )
}

export default ListaImagens