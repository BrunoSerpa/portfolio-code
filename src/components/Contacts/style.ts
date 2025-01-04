import styled from "styled-components";
import { font1 } from "../../styles";

const DivContacts = styled.div`
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor2};
    border-bottom: 1px solid ${(props) => props.theme.textColor1};
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: space-between;
    padding: 15px 20px;
    position: absolute;
    width: 100%;
`;
const DivContact = styled.div`
    align-items: center;
    background-color: ${(props) => props.theme.backgroundColor2};
    display: flex;
    gap: 5px;
`;
const LinkContacts = styled.a`
    color: ${(props) => props.theme.textColor1};
    ${font1};
`;
const TextContacts = styled.p`
    color: ${(props) => props.theme.textColor1};
    ${font1};
`;

export { DivContacts, DivContact, LinkContacts, TextContacts };