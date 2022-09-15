import styled from "styled-components";

const Header = () => {
  return (
    <Background>
      <Container>
          <LogoImage src={require("../../utils/images/Recurso4.png")} alt="Lenovo Tech One Logo"/>
          <Abstract src={require("../../utils/images/HeaderColor.png")} alt="Abstract figure"/>
      </Container>
    </Background>
  );
};

export default Header;

const Background = styled.div`
  background: url('/ot-pattern.png');
  background-size: 160px;
  background-repeat: repeat;
  background-color: #222E33;
  @media (min-width: 648px){
    background-size: 250px;
  }
`

const Container = styled.div`
  background: url('/ot-pattern.png');
  background-repeat: repeat;
  background-size: 160px;
  background-position: top right -48.5px;
  max-width: 1024px;
  height: 80px;
  margin: 0 auto;
  padding: 0px 32px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 648px){
    background-size: 250px;
    height: 125px;
    background-position: top right -37px;
    padding: 0px 88px;
  }
`

const LogoImage = styled.img`
  object-fit: contain;
  width: 80px;
  @media (min-width: 648px){
    width: 150px;
`

const Abstract = styled.img`
  align-self: flex-start;
  max-width: 373px;
  max-height: 80px;
  height: 66.66%;
  object-fit: contain;
  @media (min-width: 648px){
    max-height: 130px;
  }
`