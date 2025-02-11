import styled from "styled-components";
import { font5 } from "../../styles";

const Download = styled.a`
    background-color: green;
    color: ${(props) => props.theme.textColor4};
    ${font5};
    text-decoration: none;
    padding: 5px 10px;
    margin: 0 auto;
`;
const ProfileImg = styled.img`
    border: 1px solid ${(props) => props.theme.textColor1};
    background-color: ${(props) => props.theme.textColor1};
    height: 300px;
    margin: 0 auto;
    width: 300px;
`;

export { Download, ProfileImg };