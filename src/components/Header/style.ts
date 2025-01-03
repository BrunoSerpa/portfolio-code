import styled from "styled-components";
import { font2, WhiteMode } from "../../styles";

const DivContact = styled.a`
    align-items: center;
    display: flex;
    gap: 6px;
    padding: 0 20px;
`;
const DivFlag = styled.div`
    align-items: center;
    display: flex;
    gap: 5px;
    justify-content: center;
`;
const DivFunctions = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding-right: 20px;
`;
const DivLinks = styled.div`   
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    flex: 1;
    justify-content: space-evenly;
    padding-left: 20px;
`;
const DivHeader = styled.div`
    align-items: center;
    background-color: ${WhiteMode.backgroundColor3};
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const ImgContact = styled.img`
    height: 20px;
    width: 20px;
`;
const ImgFunctions = styled.img`
    height: 50px;
    width: 50px;
`;
const LinkHeader = styled.a`
    color: ${WhiteMode.textColor4};
    ${font2}
    text-decoration: none;
`;
const TextFunctions = styled.p`
    color: ${WhiteMode.textColor4};
    ${font2}
`;

export { DivContact, DivFlag, DivFunctions, DivHeader, DivLinks, ImgContact, ImgFunctions, LinkHeader, TextFunctions };