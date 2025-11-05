// rafce
import React from 'react'

const Imagem = ({imageStyle, src, alt}) => {
  return (
    <div className={imageStyle}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem