import styled from "styled-components";
import { font5 } from "../../styles";

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

export { Habilitys, Hability };