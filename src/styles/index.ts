import { createGlobalStyle, css } from "styled-components";

import { backgroundColor1, backgroundColor2, backgroundColor3, textColor1, textColor2, textColor3, textColor4 } from "./theme";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');


  body {
    font-family: 'Open Sans', 'Poppins';
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
export { backgroundColor1, backgroundColor2, backgroundColor3, textColor1, textColor2, textColor3, textColor4 };
export { font1, font2, font3, font4, font5, font6 };