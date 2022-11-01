import styled from "@emotion/styled";
import { useEffect } from "react";

const Resultado = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (min-width: 992px){
    flex-direction: row;
  }
    
`
const Precio = styled.p`
  font-size: 24px;
  margin-bottom: 6px;
  span{
    font-size:24px;
  }
`
const Span = styled.span`
  font-weight: 700;
  font-size: 18px;
`

const Imagen = styled.img`
  display: block;
  max-width: 150px;
  width: 100%;
`
const Cotizacion = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;

  return (
    <Resultado>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="icono crypto" />
      <div>
        <Precio>El precio es de: <Span>{PRICE}</Span></Precio>
        <p>Precio mas alto del dia: <Span>{HIGHDAY}</Span></p>
        <p>Precio mas bajo  del dia: <Span>{LOWDAY}</Span></p>
        <p>Ultima actualizacion: <Span>{LASTUPDATE}</Span></p>
        <p>Porcentaje de variacion 24H:  <Span>{ CHANGEPCT24HOUR.toLocaleString('ar-EG') } %</Span></p>
      </div>
    </Resultado>
  );
};

export default Cotizacion;
