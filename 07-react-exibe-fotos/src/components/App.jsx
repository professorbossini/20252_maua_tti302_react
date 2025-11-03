import React from 'react'
import Busca from './Busca'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'

class App extends React.Component {

  state = {
    photos: []
  }

  onBuscaRealizada = async (termoDeBusca) => {
    const result = await pexelsClient.get('/search', {
      params: {
        query: termoDeBusca
      }
    })
    console.log(result)
    this.setState({photos: result.data.photos})
  }

  // onBuscaRealizada = (termoDeBusca) => {
  //   this.pexelsClient.photos.search({
  //     query: termoDeBusca,
  //     per_page: 10
  //   })
  //   .then(result => this.setState({photos: result.photos}))
  // }
  
  
  render(){
    return (
      <div className='grid border-1 border-400 border-round-sm p-3 mx-3 mt-3'>
        <div className="col-12">
          <i className="pi pi-truck"></i>
        </div>
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}
            dica="Digite o que quer ver"/>
        </div>
        <div className="col-12">
          <ListaImagens photos={this.state.photos} />   
        </div>
      </div>
    )
  }
}

export default App