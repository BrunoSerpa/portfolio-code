import styled from "styled-components";
import { font1, font3, font5, font6, WhiteMode } from "../../styles";

const DivContend = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 50px;
`;
const DivHeader = styled.div`
    border-bottom: ${WhiteMode.backgroundColor3} solid 1px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: space-between;
    padding: 0 25px;
`;
const DivPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
const Download = styled.a`
    background-color: green;
    color: ${WhiteMode.textColor4};
    ${font5};
    text-decoration: none;
    padding: 5px 10px;
    margin: 0 auto;
`;
const LinkHeader = styled.a`
    color: ${WhiteMode.textColor1};
    ${font1};
    text-decoration: none;
`;
const Paragraph = styled.p`
    color: ${WhiteMode.textColor1};
    ${font3};
    text-align: justify;
    text-indent: 50px;
`;
const ProfileImg = styled.img`
    border: 1px solid ${WhiteMode.textColor1};
    height: 300px;
    margin: 0 auto;
    width: 300px;
`;
const Title = styled.h1`
    color: ${WhiteMode.textColor1};
    ${font6};
    text-align: center;
`;

export { DivHeader, DivContend, DivPage, Download, LinkHeader, Paragraph, ProfileImg, Title };