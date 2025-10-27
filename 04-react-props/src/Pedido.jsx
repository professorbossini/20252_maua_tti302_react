// rafce
import React from 'react'

const Pedido = ( { icone, categoriaIcone, titulo, descricao } ) => {
  // // const data = props.data
  // // const icone = props.icone
  // const { data, icone, categoriaIcone, titulo, descricao } = props
  return (
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <i className={`fa-${categoriaIcone} fa-${icone} fa-2x`}></i>
        </div>
        <div className="flex-grow-1 border rounded pt-3">
          <h4 className="text-center">{titulo}</h4>
          <p className="text-center">{descricao}</p>
        </div>
      </div>
  )
}

export default Pedido