import React from "react";
import {
  Column1,
  Column2,
  Cont,
  DestacadoContainer,
  DestacadoGray,
  DestacadoWhite,
  FrameRow,
  FrameRow2,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextoDestacado,
  TextWrapper,
  TextWrapperCenter,
  TextWrapperDescripcion,
  TextWrapperDestacado,
  TextWrapperSub,
} from "./ContentElements";

const Contenido = () => {
  return (
    <>
      <Cont>
        <FrameRow>
          <Column1>
            <TextWrapper>
              <Heading>Contenidos</Heading>
            </TextWrapper>
            <TextWrapperSub>
              <Subtitle>
                Descarga la variedad de archivos multimedia que tenemos para ti
                conocde más de Lenovo Tech One
              </Subtitle>
            </TextWrapperSub>
          </Column1>
          <Column2>
            <FrameRow2>
              <Column1>
                <TextWrapperCenter>Catálogo</TextWrapperCenter>
              </Column1>
              <Column2>
                <TextWrapperCenter>Evento</TextWrapperCenter>
              </Column2>
            </FrameRow2>
            <FrameRow2>
              <Column1>
                <TextWrapperCenter>Innovación</TextWrapperCenter>
              </Column1>
              <Column2>
                <TextWrapperCenter>Soluciones</TextWrapperCenter>
              </Column2>
            </FrameRow2>
          </Column2>
        </FrameRow>
      </Cont>
      <DestacadoContainer>
        <FrameRow>
          <Column1>
            <DestacadoGray>
              <FrameRow>
                <Column1>
                  <TextWrapperDestacado>
                    <TextoDestacado>
                      Conoce más acerca de Lenovo Tech One
                    </TextoDestacado>
                  </TextWrapperDestacado>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={require("../../images/lol.jpg")} />
                  </ImgWrap>
                </Column2>
              </FrameRow>
              <FrameRow>
                <TextWrapperDescripcion>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  viverra nulla consectetur, accumsan lorem id, accumsan est.
                  Aliquam nisl risus, aliquet sed volutpat quis, iaculis vitae
                  felis. Pellentesque sed odio non risus suscipit ullamcorper.
                  Proin leo odio, rhoncus nec malesuada porttitor, tempor id
                  risus. Integer at mi enim. Nunc ac auctor lorem. Phasellus nec
                  enim elit. Suspendisse a neque at odio dignissim sollicitudin
                  a in mi.
                </TextWrapperDescripcion>
              </FrameRow>
            </DestacadoGray>
          </Column1>
          <Column2>
            <DestacadoWhite>
              <FrameRow>
                <Column1>
                  <TextWrapperDestacado>
                    <TextoDestacado>
                      Conoce más acerca de Lenovo Tech One
                    </TextoDestacado>
                  </TextWrapperDestacado>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={require("../../images/lol.jpg")} />
                  </ImgWrap>
                </Column2>
              </FrameRow>
              <FrameRow>
                <TextWrapperDescripcion>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  viverra nulla consectetur, accumsan lorem id, accumsan est.
                  Aliquam nisl risus, aliquet sed volutpat quis, iaculis vitae
                  felis. Pellentesque sed odio non risus suscipit ullamcorper.
                  Proin leo odio, rhoncus nec malesuada porttitor, tempor id
                  risus. Integer at mi enim. Nunc ac auctor lorem. Phasellus nec
                  enim elit. Suspendisse a neque at odio dignissim sollicitudin
                  a in mi.
                </TextWrapperDescripcion>
              </FrameRow>
            </DestacadoWhite>
          </Column2>
        </FrameRow>
        <FrameRow>
          <Column1>
            <DestacadoWhite>
              <FrameRow>
                <Column1>
                  <TextWrapperDestacado>
                    <TextoDestacado>
                      Conoce más acerca de Lenovo Tech One
                    </TextoDestacado>
                  </TextWrapperDestacado>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={require("../../images/lol.jpg")} />
                  </ImgWrap>
                </Column2>
              </FrameRow>
              <FrameRow>
                <TextWrapperDescripcion>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  viverra nulla consectetur, accumsan lorem id, accumsan est.
                  Aliquam nisl risus, aliquet sed volutpat quis, iaculis vitae
                  felis. Pellentesque sed odio non risus suscipit ullamcorper.
                  Proin leo odio, rhoncus nec malesuada porttitor, tempor id
                  risus. Integer at mi enim. Nunc ac auctor lorem. Phasellus nec
                  enim elit. Suspendisse a neque at odio dignissim sollicitudin
                  a in mi.
                </TextWrapperDescripcion>
              </FrameRow>
            </DestacadoWhite>
          </Column1>
          <Column2>
            <DestacadoGray>
              <FrameRow>
                <Column1>
                  <TextWrapperDestacado>
                    <TextoDestacado>
                      Conoce más acerca de Lenovo Tech One
                    </TextoDestacado>
                  </TextWrapperDestacado>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img src={require("../../images/lol.jpg")} />
                  </ImgWrap>
                </Column2>
              </FrameRow>
              <FrameRow>
                <TextWrapperDescripcion>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  viverra nulla consectetur, accumsan lorem id, accumsan est.
                  Aliquam nisl risus, aliquet sed volutpat quis, iaculis vitae
                  felis. Pellentesque sed odio non risus suscipit ullamcorper.
                  Proin leo odio, rhoncus nec malesuada porttitor, tempor id
                  risus. Integer at mi enim. Nunc ac auctor lorem. Phasellus nec
                  enim elit. Suspendisse a neque at odio dignissim sollicitudin
                  a in mi.
                </TextWrapperDescripcion>
              </FrameRow>
            </DestacadoGray>
          </Column2>
        </FrameRow>
      </DestacadoContainer>
    </>
  );
};

export default Contenido;
