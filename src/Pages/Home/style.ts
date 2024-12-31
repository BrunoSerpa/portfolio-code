import styled from "styled-components";
import { textColor1 } from "../../styles/theme";

const Title = styled.h1`
    color: ${textColor1};
    text-align: center;
`;
const Paragraph = styled.p`
    color: ${textColor1};
    text-align: justify;
    text-indent: 50px;
`;
const ProfileImg = styled.img`
    width: 300px;
    height: 300px;
    border: 1px solid ${textColor1};
    margin: 0 auto;
`;

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 25px 50px;
`;

export { Paragraph, ProfileImg, ProfileDiv, Title };