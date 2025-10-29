import React from 'react'
import Busca from './Busca'

class App extends React.Component {

  onBuscaRealizada = (termoDeBusca) => {
    const chaveAPI = 'a91Qyfh2Ud1rdeOGKV8aTR5Aj9UmRvdma6EdyhC9EfKStoAyt7rmDuhV'
    console.log(termoDeBusca)
  }
  render(){
    return (
      <div className='grid border-1 border-400 border-round-sm p-3 mx-3 mt-3'>
        <div className="col-12">
          <i className="pi pi-truck"></i>
        </div>
        <div className="col-12">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}
            dica="Digite o que quer ver"/>
        </div>
      </div>
    )
  }
}

export default App