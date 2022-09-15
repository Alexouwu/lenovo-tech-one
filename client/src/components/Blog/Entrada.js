import React from 'react'
import styled from "styled-components";

function Entrada() {
  return (
      <>
      <Wrapper>
      <div style={{display:'flex',flexDirection:'row'}}>
            <div>
            <h1>Conoce más acerca de Lenovo Tech One</h1>
            <img style={{width:'50em',height:'30em',backgroundColor:'red'}}></img>
            </div>
            <div style={{margin:'2.5em 0em 0em 4em', width: '7em'}}>
            <h3>Entradas recientes</h3>
            <img></img> <p>Quiénes están detras de las soluciones del...</p>
            <img></img> <p>Quiénes están detras de las soluciones del...</p>
            <img></img> <p>Quiénes están detras de las soluciones del...</p>
            </div>
        </div>
        <div style={{width: '70%'}}>
        <p>Lörem ipsum difisosa ariktigt kotresaras. Nybelt vide så gigaspenas även om kontrang döpp när homopektigt. Junas spesost rid, jöl spenena. Baskapet pesk nyr, i sålasade parahobelt. Soling kajude, och ruktig sektiga, i minat. Lara bese. Sor häre fiktig. Du kan vara drabbad.
        Pomär rerad trev. Kontrare spemävis, och sonde suprara makroligt kvasiledes. Aheten telelogi. Dysbel poder käd, hor. Gigangen viliga än lahet mong är hexaktig. Al multins dist, pons. Far intraligen, iktig plus rusk. Irat intrans visorat kroligt kavis. Spenat laheten. Otrenade lanis. Ånar kroras speng seng jag prertad biosol. Premäpalig tede sist, pseudotet, sobel sar. Tesösamma nesm en tesoren. Kvasist dös, astrode yr.
        Tesamma bement döber lade käktiga. Miruruska oktig utan jörade dera tisade att fande. Antira pretiv. Dore. Aliga sint, ujäbagen i ultrasosirurat. Rerade dongen fastän exortad, sabel. Åv virade käras, vangen.Kektiga hexajöligt. Jöra runde med euvis nyras. Sohär biortad prekrossa nöngen. Prelir supp. Bäjöment dibaling om än år ising eller desisade. As vengen. Söning apresk för att krora spekir sytens moras. Kektig dot. Mingen dura, pall, homosade. Dongen teran infrande. Nybeck kontrase tida. Vise enbel: pos. Dokynat dett gerinde i tiskap, anterussa i saligen. Autobel nikyn deciktiga för att digt.
        Kektiga hexajöligt. Jöra runde med euvis nyras. Sohär biortad prekrossa nöngen. Prelir supp. Bäjöment dibaling om än år ising eller desisade. As vengen. Söning apresk för att krora spekir sytens moras. Kektig dot. Mingen dura, pall, homosade. Dongen teran infrande. Nybeck kontrase tida. Vise enbel: pos. Dokynat dett gerinde i tiskap, anterussa i saligen. Autobel nikyn deciktiga för att digt.</p>
    </div>
    </Wrapper>
  </>
  )
}

export default Entrada

const Wrapper = styled.div`
 width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  flex-direction: column;
  margin-bottom: 5em;
  @media screen and (max-width: 1000px){
  }` 