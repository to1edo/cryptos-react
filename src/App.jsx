import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import imagen from './assets/crypto.png'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'

const Contenedor = styled.div`
  max-width:1000px;
  width:90%;
  margin:0 auto;

  @media (min-width:992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    align-items: center;
    gap:2rem;
  }
`
const Imagen = styled.img`
  max-width:400px;
  width:80%;
  margin:0 auto;
  display: block;
`

const Heading = styled.h1`
  text-align: center;
  font-size:34px;
  padding:6px 0;
  border-top: 6px solid #5a37c3;
  border-bottom: 6px solid #5a37c3;
  border-radius: 12px;
  margin-bottom: 36px;
  margin-top: 40px;
`

function App() {
  const [consulta, setConsulta] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)


  useEffect(() => {
    if(Object.keys(consulta).length){
      async function cotizar(){
        setCargando(true)
        setResultado({})
        const response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${consulta.criptomoneda}&tsyms=${consulta.moneda}`)
        const result = await response.json()

        setResultado(result.DISPLAY[consulta.criptomoneda][consulta.moneda])
        setCargando(false)
      }
      cotizar()
    }
  }, [consulta])


  return (
    <Contenedor>
      <Imagen src={imagen} alt="imagen monedas"/>
      
      <div>
        <Heading>Cotizador de criptomonedas</Heading>
        <Formulario setConsulta={setConsulta}/>

        { cargando && <div className="spinner"></div>}

        { resultado.PRICE && <Cotizacion resultado={resultado}/>}
      </div>
    </Contenedor>
  )
}

export default App
