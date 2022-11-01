import { useEffect,useState } from "react"
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/data"
import Alert from "./Alert"

const Submit = styled.input`
  padding:12px 0;
  border-radius: 6px;
  background-color: #5a37c3;
  border: none;
  color: white;
  text-align: center;
  display: block;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .5s;
  margin: 36px 0;

  &:hover{
    background-color: #4c3c7b;
  }

`

const Formulario = ({setConsulta}) => {

  const [cryptos, setCryptos] = useState([])
  const [moneda, SelectMonedas] = useSelectMonedas('Elije tu moneda',monedas)
  const [criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elije tu Criptomoneda',cryptos)
  const [error, setError] = useState('')


  useEffect(() => {
    async function obtenerCryptos(){
      const response = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD')
      const result = await response.json()

      const listCrypto = result.Data.map(crypto => {
        return { id: crypto.CoinInfo.Name , name: crypto.CoinInfo.FullName}
      });

      setCryptos(listCrypto)
    }
    obtenerCryptos()
  }, [])


  const handleSubmit = (e)=>{
    e.preventDefault()

    if(moneda.trim() === '' || criptomoneda.trim() === ''){
      setError('Todos los campos son necesarios')
      setTimeout(() => {
        setError('')
      }, 3000);
      return
    }

    setConsulta({moneda, criptomoneda})

  }
  
  return (
    <form  onSubmit={handleSubmit}>
      <SelectMonedas/>
      <SelectCriptomonedas/>
      <Submit type="submit" value="Cotizar Precio"/>

      {error && <Alert>{error}</Alert>}
    </form>
  )
}

export default Formulario