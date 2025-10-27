import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {
  render() {
    return (
      <div className='flex flex-column w-full'>
        <IconField iconPosition='left' className='w-full'>
          <InputIcon className='pi pi-search'/>
          <InputText className='w-full' placeholder='Buscar...' />
        </IconField>
      </div>
    )
  }
}
