import React from "react";
import { Head, ImgWrap, Img, Img2, Img3, FaWrap} from "./HeaderElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import DDcontenidos from "./DDcontenidos";

const HeaderBlog = () => {

  return (
    <>
      <Head>
        <Wrapper>
          <ImgWrap>
            <Img src="/images/logo4.png" className="logo-header"/>
            <Img2 src="/images/motorola4.png" />
          </ImgWrap>

          <Img3 src="/images/techone.png" />
            <div style={{order: 2, display:"flex", alignItems: "center"}}>
            <DDcontenidos></DDcontenidos>
          <a href="/login">
            <FaWrap style={{width: "5em", height: "2.8em", justifyContent:"center", alignItems:"center", display:"flex", marginLeft:"1em"}}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{ color: "white", height: "1.2em", width: "auto", display:"flex" }}
                />
            </FaWrap>
            </a>
            </div>

        </Wrapper>
      </Head>
    </>
  );
};

export default HeaderBlog;

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