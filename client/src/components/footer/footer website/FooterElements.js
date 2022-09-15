import styled from "styled-components";

export const Foot = styled.div`
  background-color: #82df;
  width: 100%;
`;

export const ImgWrap = styled.div`
  max-width: 140px;
  height: auto;
  align-self: center;
  margin-right: 0px;
`;

export const ListWrapp = styled.div`
  max-width: 180px;
  @media (max-width: 648px){
    text-align: center;
  }
`;
export const ListItem = styled.p`
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Aviso = styled.div`
  align-self: flex-start;
  max-width: 250px;
  color: white;
  font-weight: 400;
  @media (max-width: 648px){
    text-align: center;
    align-self: center;
  }
`;

export const Img1 = styled.img`
  width: 100%;
  margin-bottom: 1em;
  ṕadding-right: 0;
`;

export const Img2 = styled.img`
  width: 100%;
  margin: 0px 0 10px 0;
  ṕadding-right: 0;
`;

export const FootContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1250px;
  margin: 0 auto;
  gap: 24px;
  @media (max-width: 648px){
    flex-direction: column;
  }
`