import styled from "styled-components";

import "../../utils/fonts/fonts.css";

export const BackgroundContainer = styled.div`
  background-color: #0A0D0F;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  @media (max-width:648px){
    justify-content: flex-start;
  }
  @media (min-width: 648px){
    background-size: 375px;
    background-position: top right -125px;
  }
`;

export const Form = styled.form`
  margin-top: 15px;
  text-align: center;
  justify-content: center; // centers in the flex direction and the default flex-direction is row
  align-items: center;
  z-index: 0;
`;

export const MegaDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MegaDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  align-items: flex-end;
  margin-top: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 100px;
  width: 350px;
  align-items: flex-end;
`;

export const InputWrapper = styled.div`
  display: block;
  flex-direction: inline-block;
  text-align: center;
  padding-bottom: 12px;
  @media screen and (max-width: 630px){
    margin: auto;
  }
  
`;

export const Label = styled.label`
  font-family: "Gotham", sans-serif;
  color: #ffff;
  width: 150px;
  display: inline-block;
  font-size: 16px;
  padding: 20px 20px 20px 20px;
  margin-right: 5px;
  text-align:right;
`;

export const Input = styled.input`
  width: 350px;
  height: 50px;
  padding: 20px 20px 20px 20px;
  background: #bcb6ae;
`;

export const Button = styled.button`
  font-family: "Gotham", sans-serif;
  color: #ffff;
  font-size: 20px;
  width: 350px;
  height: 59px;
  padding: 20px 20px 20px 20px;
  background: #46c0d9;
  color: #ffff;
  border: none;
  margin-top: 15px;
  cursor:pointer;
`;

//Text
export const TextWrapper = styled.div`
  margin-top:0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width:280px) and (max-width:480px) {
    text-align: center;
    font-size: 1.3em;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
  }
  @media and (min-width:481px) and (max-width:648px){
    margin-top: 128px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width:649px) and (max-width: 820px){
    justify-content: center;
    align-items: center;
    margin-top:128px;
  }
  @media screen and (max-width : 1024px){
    justify-content: center;
    align-items: center;
    margin-top:128px;
  } 
`;

export const H1 = styled.h1`
  font-family: 'Gotham', sans-serif;
  font-weight: bold;
  color: #3E85D5;
  font-size: 4.5em;
  margin: 0px;
  padding: 0px;
  text-align: center;
  line-height: 100%;
  @media (min-width:648px){
    font-size: 4.5em;
  }
`;

export const P = styled.p`
  color: #ffff;
  font-family: 'Gotham', sans-serif;
  font-size: 1.8em;
  text-align: left;
  line-height: 100%;
  margin-bottom: 1%;
  @media screen and (min-width:280px) and (max-width:480px) {
    text-align: center;
    font-size: 1em;
  }
`;

export const A = styled.p`

  font-family: 'Gotham', sans-serif;
  font-weight: bold;
  color: #EE8B22;
  text-align: left;
  font-size: 1.7em;
  line-height: 100%;
  margin-top: 0px;
  margin-bottom: 7%;
  @media screen and (min-width:280px) and (max-width:480px) {
    margin-bottom: 1em;
    margin-top: 0.2em;
    font-size: 1.2em;
  }
`;

export const SP = styled.span`
  font-family: 'Gotham', sans-serif;
  color: #ffff;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: center;
`;

export const CheckboxDiv = styled.div`
  text-align: right;
`;

export const ButtonDiv = styled.div`
  text-align: right;
`;

export const error = styled.p`
  color: #ffff;
`;

export const LenWrapp = styled.div`
  position: absolute;
  right: 0;
  top: 25vh;
  background-color: #0A0D0F;
  padding: 1em 0em;
  @media screen and (min-width:280px) and (max-width:480px) {
  }
  @media and (min-width:481px) and (max-width:648px){
   
  }
  @media screen and (min-width:649px) and (max-width: 768px){
    
  }
`;

export const Img = styled.img`
left:11%
min-height:190px;
max-height:290px;
@media screen and (min-width:280px) and (max-width:480px) {
  min-height: 100px;
  max-height: 150px;
}
@media and (min-width:481px) and (max-width:648px){
 
}
@media screen and (min-width:649px) and (max-width: 768px){
  
}
`;
export const BlogAd = styled.div`
  background-color: #3E85D5;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;


  @media (min-width: 992px) { 
    position:relative;
    top: 3.5vh;
    min-height: 30vh;
  }

  @media (min-width: 1200px) { 
    position:relative;
    top: 3.5vh;
    min-height: 30vh;
  }

  @media screen and (max-width : 820px){
    flex-direction: column;
  } 
  @media screen and (max-width : 1024px){
    flex-direction: column;
    position:relative;
    top: 3vh;
    min-height: 30vh;
    bottom: 10vh;
  } 
`
export const CtaBlog = styled.h2`
  color: #333F48;
  font-family: 'Gotham-medium';
  font-size: 1.5em;
  margin: 0em 0em 0.5em 0em; 
  text-align: center;
  @media screen and (min-width:280px) and (max-width:480px) {
    font-size: 1.0em;
    margin-bottom: 1em;
  }
  @media and (min-width:481px) and (max-width:648px){
   
  }
  @media screen and (min-width:649px) and (max-width: 768px){
    
  }
`
export const CtaButton = styled.a`
  color: white;
  font-family: 'Gotham-bold';
  font-size: 0.8em;
  padding: 1em 5em;
  border: 1px solid white;
  text-decoration: none;
  @media screen and (min-width:280px) and (max-width:480px) {font
    padding: 1em 2em;
  }
  @media and (min-width:481px) and (max-width:648px){
   
  }
  @media screen and (min-width:649px) and (max-width: 768px){
    
  }
`
export const ProgBut = styled.a`
  font-family: "Gotham", sans-serif;
  display: flex;
  background-color: #6ABB46;
  color: white;
  text-decoration: none;
  font-size: 0.8em;
  padding: 1em 0em;
  width: 210px;
  align-items:center;
  justify-content:center;
  @media screen and (min-width:280px) and (max-width:480px) {
    margin-bottom: 1em;
    width: auto;
    padding: 1em 1em;
    font-size: 0.6em;
  }
  @media and (min-width:481px) and (max-width:648px){
   margin-bottom: 5em;
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
    margin-bottom: 5em;
  }
`
export const SiqCTA = styled.p`
  font-family: 'Gotham', sans-serif;
  display: flex;
  color: white;
  font-size: 1em;
  line-height: 100%;
  margin-top: 1%;
  margin-bottom 3%;

  @media screen and (min-width:280px) and (max-width:480px) {
    font-size: 0.8em;
  }
  @media and (min-width:481px) and (max-width:648px){
    font-size: 0.8em;
    margin-top:0em;
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
    margin-top: 0em;
  }
  
  
`
export const Caldiv = styled.div`
  margin-top:0px;
  display: flex;
  width: 100%;
  height: 12em;
  justify-content: center;
  @media screen and (max-width: 820px){
    margin-top: 3em;
    margin-bottom: 4em;
  }

`;
export const Calendar = styled.div`
  background-color: #EEEEEE;
  height: 100%;
  width: 12em;
  text-align: center;
  display: flex;
  flex-direction:column;
`
;
export const M = styled.h1`
  font-family: 'Gotham', sans-serif;
  line-height: 100%;
  font-weight: 300;
  font-size: 1.5em;
  color: #3E85D5;
`
;

export const Y = styled.h2`
  line-height: 100%;
  color: #333F48;
  font-size: 1.3em;
  text-align: center;
  margin-left: 0.5em;
  letter-spacing: 0.5em;
`
;
export const D = styled.p`
  font-family: 'Gotham', sans-serif;
  line-height: 100%;
  font-size: 0.9em;
  margin: 15px 0px 5px 0px;
  padding: 0px;
`
;
export const CalBtn = styled.a`
  background-color: #EE8B22;
  text-decoration: none;
  font-size: 0.8em;
  padding: 1em 0em;
  color: white;
  cursor: ponter;
`
;
export const WrapperDapper = styled.div`
  display: flex;
  flex-direction:row;
  
  @media (min-width: 992px) { 
    position:relative;
    top: 10vh;
    min-height: 50vh;
  }

  @media (min-width: 1200px) { 
    position:relative;
    top: 10vh;
    min-height: 50vh;
  }

  @media screen and (max-width : 820px){
    flex-direction: column;
  } 
  @media screen and (max-width : 1024px){
    flex-direction: column;
    position:relative;
    top: -5vh;
    min-height: 80vh;
  } 
`
;
export const Horario = styled.h2`
  font-family: "Gotham", sans-serif;
  color: white;
  font-size: 0.8em;
  @media screen and (min-width:280px) and (max-width:320px) {
    font-size: 0.6em;
  }
  @media screen and (min-width:321px) and (max-width:340px) {
    font-size: 0.6em;
  }
  @media and (min-width:481px) and (max-width:648px){
    font-size: 0.8em;
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
    font-size: 0.8em;
  }
`
;
export const H1Pr = styled.h1`
  font-family: "Gotham",sans-serif;
  color: #46C0D9; 
  font-size: 1em;
  margin-left: 0.8em;
  @media screen and (min-width:280px) and (max-width:480px) {
    font-size: 0.8em;
  }
  @media and (min-width:481px) and (max-width:648px){
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
  }
  
`
;
export const Banner = styled.img`
    min-height: 500px;
    max-height: 500px;
    @media screen and (min-width:280px) and (max-width:320px) {
      min-height: 375px;
      max-height: 375px;
    }
    @media screen and (min-width:321px) and (max-width:340px) {
      min-height: 375px;
    max-height: 375px;
    }
    @media and (min-width:481px) and (max-width:648px){
    }
    @media screen and (min-width:649px) and (max-width: 1024px){
    }
  `
  ;
  export const R = styled.p`
  font-family: "Gotham", sans-serif;
    font-size: 0.7em;
    line-height: 100%;
    margin: 0.3em 0em 0.1em 0em;
    color: white;
    @media screen and (min-width:280px) and (max-width:320px) {
      font-size: 0.5em;
      margin-top: 0.2em;
      margin-bottom: 0em;
    }
    @media screen and (min-width:321px) and (max-width:480px) {
      font-size: 0.6em;
    }
    @media and (min-width:481px) and (max-width:648px){
    }
    @media screen and (min-width:649px) and (max-width: 1024px){
    }
  `;
  export const N = styled.span`
    color: #EE8B22;
  `
;
export const AgT = styled.h1`
font-family: "Gotham", sans-serif;
color:white;
font-size: 1.5em;
margin-top:2em; 
text-align: center;
@media screen and (min-width:280px) and (max-width:320px) {
  font-size: 0.9em;
}
@media screen and (min-width:321px) and (max-width:480px) {
  font-size: 1em;
}
@media and (min-width:481px) and (max-width:648px){
  font-size: 1.2em;
}
@media screen and (min-width:649px) and (max-width: 1024px){
  font-size: 1.5em;
}

`
;
export const H1Pr1 = styled.h1`
font-family: "Gotham", sans-serif;
color: #46C0D9; 
font-size: 1em;
margin-left: 0.8em;
  margin-top: 1.1em;
  @media screen and (min-width:280px) and (max-width:320px) {
    font-size: 0.7em;
  }
  @media screen and (min-width:321px) and (max-width:340px) {
    font-size: 0.8em;
    margin-top: 1em;
  }
  @media and (min-width:481px) and (max-width:648px){
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
  }
  
`
;
export const H1Pr2 = styled.h1`
font-family: "Gotham", sans-serif;
color: #46C0D9; 
font-size: 1em;
margin-left: 0.8em;
  margin-top: 2.55em;
  @media screen and (min-width:280px) and (max-width:320px) {
    font-size: 0.7em;
    margin-top: 3em;
  }
    @media screen and (min-width:321px) and (max-width:340px) {
    font-size: 0.8em;
    margin-top: 2.4em;
  }
  @media and (min-width:481px) and (max-width:648px){
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
  }
  
`
;
export const H1Pr3 = styled.h1`
font-family: "Gotham", sans-serif;
  color: #46C0D9; 
  font-size: 1em;
  margin-left: 0.8em;
  margin-top: 2.4em;
  @media screen and (min-width:280px) and (max-width:320px) {
    font-size: 0.7em;
    margin-top: 2.6em;
  }
    @media screen and (min-width:321px) and (max-width:340px) {
    font-size: 0.8em;
    margin-top: 2em;
  }
  @media and (min-width:481px) and (max-width:648px){
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
  }
  
`
;
export const H1Pr4 = styled.h1`
font-family: "Gotham", sans-serif;
  color: #46C0D9; 
  font-size: 1em;
  margin-left: 0.8em;
  margin-top: 2.5em;

  @media screen and (min-width:280px) and (max-width:390px) {
    font-size: 0.7em;
    margin-top: 0.6em;
  }
  @media screen and (min-width: 391px) and (max-width:440px){
    font-size: 0.8em;
    margin-top: 1.2em;
  }
  @media screen and (min-width:441px) and (max-width:703px){
    margin-top: 1.6em;
  }
  @media screen and (min-width:704px) and (max-width: 800px){
    margin-top: 1.1em;
  }
  
`
;
export const H1Pr5 = styled.h1`
font-family: "Gotham", sans-serif;
  color: #46C0D9; 
  font-size: 1em;
  margin-left: 0.8em;
  margin-top: 2.4em;
  @media screen and (min-width:280px) and (max-width:320px) {
    font-size: 0.7em;
    margin-top: 0.7em;
  }
    @media screen and (min-width:321px) and (max-width:440px) {
    font-size: 0.8em;
    margin-top: 0.7em;
  }
  @media screen and (min-width:441px) and (max-width:714px){
    margin-top: 2.5em;
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
  }
  
`
;
export const H1Pr6 = styled.h1`
  font-family: "Gotham", sans-serif;
  color: #46C0D9; 
  font-size: 1em;
  margin-left: 0.8em;
  margin-top: 2.4em;
  @media screen and (min-width:280px) and (max-width:320px) {
    font-size: 0.7em;
    margin-top: 2.4em;
  }
    @media screen and (min-width:321px) and (max-width:714px) {
  }
  @media and (min-width:481px) and (max-width:648px){
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
  }
  
`
;
export const H1Pr7 = styled.h1`
  font-family: "Gotham", sans-serif;
  color: #46C0D9; 
  font-size: 1em;
  margin-left: 0.8em;
  margin-top: 2.4em;
  @media screen and (min-width:280px) and (max-width:320px) {
    font-size: 0.7em;
    margin-top: 2.7em
  }
    @media screen and (min-width:321px) and (max-width:px) {
    font-size: 0.8em;
    margin-top: 2.8em;
  }
  @media screen and (min-width:481px) and (max-width:648px){
  }
  @media screen and (min-width:649px) and (max-width: 1024px){
  }
  
`
;
 
