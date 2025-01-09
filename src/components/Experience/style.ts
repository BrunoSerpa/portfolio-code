import styled from "styled-components";
import { font5 } from "../../styles";

const DivExperience = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const TitleExperience = styled.h1`
    color: ${(props) => props.theme.textColor1};
    ${font5};
`;

export { DivExperience, TitleExperience };