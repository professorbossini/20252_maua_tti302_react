import Pedido from "./Pedido"

const App = () => {
  return (
    <div className="container border rounded mt-2">
      
      <div className="row">
        <div className="col-12">
          <h1 className="display text-center">Seus pedidos</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-6 col-xl-4 col-xxl-3">
          <Pedido 
            data='20/05/2025'
            categoriaIcone='solid'
            icone='hard-drive'
            titulo='SSD'
            descricao='SSD de 1 Terabyte'/>
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-4 col-xxl-3">
          <Pedido 
            data='22/07/2025'
            categoriaIcone='solid'
            icone='book'
            titulo='Livro'
            descricao='Concrete Maths'/>
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-4 col-xxl-3">
          <Pedido 
            data='21/09/2025'
            categoriaIcone='solid'
            icone='anchor'
            titulo='Âncora'
            descricao='Uma âncora'/>
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-4 col-xxl-3">
          <Pedido 
            data='22/05/2025'
            categoriaIcone='solid'
            icone='fish'
            titulo='Peixe'
            descricao='Um peixe'/> 
        </div>  
      </div>
    </div>
  )
}

export default App