// rafce
import React from 'react'

const Imagem = ({src, alt, imageStyle}) => {
  return (
    <div
      className={imageStyle}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem