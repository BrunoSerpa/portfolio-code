import { createGlobalStyle, css } from "styled-components";
import ITheme, { DarkMode, WhiteMode } from "./theme";

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
const font1 = css`
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: bold;
`;
const font2 = css`
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: regular;
`;
const font3 = css`
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: regular;
`;
const font4 = css`
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: bold;
`;
const font5 = css`
  font-family: 'Open Sans';
  font-size: 25px;
  font-weight: bold;
`;
const font6 = css`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
`;

export default GlobalStyle;
export { font1, font2, font3, font4, font5, font6, DarkMode, WhiteMode };
export type { ITheme };