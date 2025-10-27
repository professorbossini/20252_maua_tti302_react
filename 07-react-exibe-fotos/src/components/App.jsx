import React from 'react'
import Busca from './Busca'

const App = () => {
  return (
    <div className='grid border-1 border-400 border-round-sm p-3 mx-3 mt-3'>
      <div className="col-12">
        <i className="pi pi-truck"></i>
      </div>
      <div className="col-12">
        <Busca />
      </div>
    </div>
  )
}

export default App