import styled from "styled-components";
import { font5, WhiteMode } from "../../styles";

const Download = styled.a`
    background-color: green;
    color: ${WhiteMode.textColor4};
    ${font5};
    text-decoration: none;
    padding: 5px 10px;
    margin: 0 auto;
`;
const ProfileImg = styled.img`
    border: 1px solid ${WhiteMode.textColor1};
    height: 300px;
    margin: 0 auto;
    width: 300px;
`;

export { Download, ProfileImg };