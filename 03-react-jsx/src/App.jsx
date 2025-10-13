import './styles.css'
const App = () => {

  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}

  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => 'Enviar'

  const aoClicar = () => alert('clicou')

  return(
    <div style={{width: 768, margin: 'auto', backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label className='rotulo' htmlFor='nome' style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>
      <input id='nome' type="text" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8}}/>
      <button
        onClick={() => {aoClicar()}} 
        style={estilosBotao}>
        {obterTextoDoBotao()}
      </button>
    </div>

  )
}

export default App
