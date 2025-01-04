import styled from "styled-components";
import { font2 } from "../../styles";

const DivContact = styled.a<{ showContact: boolean }>`
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 6px;
    padding: 0 20px;
    background-color: ${(props) => props.showContact ? props.theme.backgroundColor2 : 'transparent'};
`;
const DivDropdown = styled.div<{ showContact: boolean }>`
    transform: ${(props) => props.showContact ? 'rotate(180deg)' : 'rotate(0deg)'};
    margin-top: ${(props) => props.showContact ? '0' : '8px'};
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
const DivHeader = styled.div`
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor3};
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
const DivLinks = styled.div`   
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    flex: 1;
    justify-content: space-evenly;
    padding-left: 20px;
`;
const FunctionTheme = styled.a`
    cursor: pointer;
`;
const LinkHeader = styled.a`
    color: ${(props) => props.theme.textColor4};
    ${font2};
    text-decoration: none;
`;
const TextFunctions = styled.p<{ showContact?: boolean }>`
    color: ${(props) => props.showContact ? props.theme.textColor1 : props.theme.textColor4};
    ${font2};
`;

export { DivContact, DivDropdown, DivFlag, DivFunctions, DivHeader, DivLinks, FunctionTheme, LinkHeader, TextFunctions };