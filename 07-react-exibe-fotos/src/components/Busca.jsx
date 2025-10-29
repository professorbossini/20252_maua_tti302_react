import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

// const f = (props) => {}
// class Pessoa{
//   String nome;
// }

// class Aluno extends Pessoa{
//   void exibirNome(){
//     print(nome);
//   }
// }
export default class Busca extends Component {

  // props = null
  // constructor(props){
  //   super(props)
  //   const { onBuscaRealizada } = 
  // }

  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (evento) => {
    console.log(evento.target.value)
    //não faça assim
    // this.state.termoDeBusca = evento.target.value
    this.setState({
      termoDeBusca: evento.target.value
    })
    // this.render()
  }

  onFormSubmit = (evento) => {
    evento.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)  
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column w-full'>
          <IconField iconPosition='left' className='w-full'>
            <InputIcon className='pi pi-search'/>
            <InputText
              value={this.state.termoDeBusca} 
              className='w-full' 
              placeholder={this.props.dica}
              onChange={this.onTermoAlterado} />
          </IconField>
          <Button 
            label='OK'
            className='mt-2 p-button-outlined'/>
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'Buscar...'  
}
