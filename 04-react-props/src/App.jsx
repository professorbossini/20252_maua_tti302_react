import Cartao from "./Cartao"
import Pedido from "./Pedido"

const App = () => {

  const pedidos = [
    {
      data: '22/10/2025',
      titulo: 'SSD',
      icone: 'hard-drive',
      descricao: 'Um SSD de 1 Tera',
      categoriaIcone: 'solid'
    },
    {
      data: '22/01/2025',
      titulo: 'Um Livro',
      icone: 'book',
      descricao: 'Concrete Maths',
      categoriaIcone: 'solid'
    },
    {
      data: '20/10/2025',
      titulo: 'Âncora',
      icone: 'anchor',
      descricao: 'Uma âncora',
      categoriaIcone: 'solid'
    },
    {
      data: '22/10/2025',
      titulo: 'Peixe',
      icone: 'fish',
      descricao: 'Um peixe',
      categoriaIcone: 'solid'
    },
    
  ]
  return (
    <div className="container border rounded mt-2">
      
      <div className="row">
        <div className="col-12">
          <h1 className="display text-center">Seus pedidos</h1>
        </div>
      </div>

      <div className="row">
        {
          pedidos.map((p, index) => (

            <div key={index} className="col-sm-12 col-lg-6 col-xl-4 col-xxl-3">
              <Cartao
                cabecalho={p.data}>
                <Pedido 
                  categoriaIcone={p.categoriaIcone}
                  icone={p.icone}
                  titulo={p.titulo}
                  descricao={p.descricao}/>
              </Cartao>
            </div>
          ))
        }
         
      </div>
    </div>
  )
}

export default App