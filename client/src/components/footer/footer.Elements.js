import styled from "styled-components";

import "../../utils/fonts/fonts.css";

export const FooterContainer = styled.footer`
  background-color: #8046a7;
  /* height: 100px; */
  width: 100%;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 48px 36px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
`;

export const A = styled.a`
  font-family: "Gotham Book", sans-serif;
  color: #ffff;
  font-size: 10px;
  margin-bottom: 5px;
  text-align: center;
`;
