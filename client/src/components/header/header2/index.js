import React from "react";
import { Head, ImgWrap, Img, Img2, Img3, FaWrap } from "./HeaderElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Header2 = () => {
  return (
    <>
      <Head>
        <Wrapper>
          <ImgWrap>
            <Img src="/images/logo4.png" className="logo-header"/>
            <Img2 src="/images/motorola4.png" />
          </ImgWrap>
          <Img3 src="/images/techone.png" />
          <a href="/login" style={{order: 3}}>
            <FaWrap>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ color: "white", fontSize: 32 }}
                />
            </FaWrap>
          </a>
        </Wrapper>
      </Head>
    </>
  );
};

export default Header2;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  @media screen and (max-width: 560px){
    justify-content: space-around;
  }
`