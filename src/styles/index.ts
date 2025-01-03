import styled, { createGlobalStyle } from "styled-components";
import ITheme, { DarkMode, WhiteMode } from "./theme";
import { font1, font2, font3, font4, font5, font6 } from "./fonts";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans');
  @import url('https://fonts.googleapis.com/css2?family=Poppins');

  body {
    background-color: ${WhiteMode.backgroundColor1};
    font-family: 'Open Sans', 'Poppins';
    max-width: 100vw;
    min-height: 100vh;
  };

  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
`;
const DivContend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 50px 20px 50px;
`;
const DivHeader = styled.div`
  border-bottom: ${WhiteMode.backgroundColor3} solid 1px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;
  padding: 15px 0;
`;
const NavHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;
  padding: 0 25px;
  width: 100%;
`;
const DivPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const LinkHeader = styled.a`
  color: ${WhiteMode.textColor1};
  ${font1};
  text-decoration: none;
`;
const Paragraph = styled.p`
  color: ${WhiteMode.textColor1};
  ${font3};
  text-align: justify;
  text-indent: 50px;
`;
const Title = styled.h1`
  color: ${WhiteMode.textColor1};
  ${font6};
  text-align: center;
`;

export default GlobalStyle;
export { font1, font2, font3, font4, font5, font6 };
export { DarkMode, WhiteMode };
export { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title };
export type { ITheme };