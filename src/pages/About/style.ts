import styled from "styled-components";
import { font3, font5 } from "../../styles";

const Habilitys = styled.div`
    background-color: ${(props) => props.theme.backgroundColor2};
    border: 2px solid ${(props) => props.theme.textColor2};
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    padding: 20px;
    margin: 0 auto;
    width: 80%;
`;
const Hability = styled.p`
    color: ${(props) => props.theme.textColor2};
    ${font5};
`;
const Tecs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;
const Tec = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const TitleTec = styled.p`
    color: ${(props) => props.theme.textColor1};
    ${font3};
`;
const ImageTec = styled.img`
    height: 50px;
    width: 50px;
`;

export { Habilitys, Hability, Tecs, Tec, TitleTec, ImageTec };