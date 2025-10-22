import Pedido from "./Pedido"
import Cartao from "./Cartao"
const App = () => {

  const pedidos = [
    {
      data: '22/05/2025',
      categoriaIcone: 'solid',
      icone: 'hard-drive',
      titulo: 'SSD',
      descricao: 'Um SSD'

    },
    {
      data: '21/09/2025',
      categoriaIcone: 'solid',
      icone: 'book',
      titulo: 'Um livro',
      descricao: 'Concrete Maths'

    },
    {
      data: '22/09/2025',
      categoriaIcone: 'solid',
      icone: 'anchor',
      titulo: 'Âncora',
      descricao: 'Uma âncora'

    },{
      data: '21/10/2025',
      categoriaIcone: 'solid',
      icone: 'fish',
      titulo: 'Peixe',
      descricao: 'Um peixe'

    }
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
            <div className="col-sm-12 col-lg-6 col-xl-4 col-xxl-3">

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