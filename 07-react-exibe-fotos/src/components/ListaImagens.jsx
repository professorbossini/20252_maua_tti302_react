// rafce
import React from 'react'
import Imagem from './Imagem'
const ListaImagens = ({imageStyle, photos}) => {
  return (
    photos.map((photo) => (
      <Imagem
        imageStyle={imageStyle} 
        key={photo.id}
        src={photo.src.small}
        alt={photo.alt}
      />
    ))
  )
}

export default ListaImagens