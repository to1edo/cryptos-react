import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
  color: white;
  font-weight: 700;
  font-size:24px;
  display: block;
  margin: 6px 0;
`
const Select = styled.select`
  font-size:16px;
  padding:12px;
  margin: 12px 0;
  width: 100%;
  border-radius: 6px;
`

const useSelectMonedas = (label, opciones) => {

  const [state, setState] = useState('')

  const SelectMonedas = ()=>(
    <>
      <Label>{label}</Label>

      <Select onChange={(e)=>setState(e.target.value)}  value={state}>
        <option value="">-- Selecione una opcion</option>
        {
          opciones.map(opcion => (
            <option key={opcion.id} value={opcion.id}>{opcion.name}</option>
          ))
        }
      </Select>

    </>
  )

  return [ state, SelectMonedas ]
}

export default useSelectMonedas