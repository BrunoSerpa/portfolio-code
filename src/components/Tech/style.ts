import styled from "styled-components";
import { font3 } from "../../styles";

const DivTecs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;
const DivTec = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const ImageTec = styled.img`
    height: 50px;
    width: 50px;
`;
const TitleTec = styled.h1`
    color: ${(props) => props.theme.textColor1};
    ${font3};
`;

export { DivTecs, DivTec, ImageTec, TitleTec };