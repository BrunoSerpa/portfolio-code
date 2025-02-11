import styled from "styled-components";
import { font3, font5 } from "../../styles";

const DivData = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 800px) {
        min-width: 500px;
    };
    max-height: 500px;
    overflow-y: auto;
    padding: 0 15px 20px 15px;
`;
const DivItemProject = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const DivProject = styled.div`
    background-color: ${(props) => props.theme.backgroundColor2};
    display: flex;
    @media (max-width: 800px) {
        flex-direction: column;
    }
    flex-wrap: wrap;
    gap: 10px 0;
    padding-bottom: 10px;
`;
const DivPreview = styled.div`
    @media (min-width: 800px) {
        min-width: 500px;
    }
    max-width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const ImgPreview = styled.img`
    max-width: 100%;
`;
const VideoPreview = styled.video`
    max-width: 100%;
`;
const MenuProject = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
`;
const ItemMenuProject = styled.a`
    background-color: ${(props) => props.theme.backgroundColor1};
    border: 2px solid ${(props) => props.theme.textColor1};
    color: ${(props) => props.theme.textColor1};
    height: 40px;
    display: flex;
    ${font3};
    gap: 5px;
    padding: 5px;
    &:link {
        text-decoration: none;
    }
`;
const ImgItemMenuProject = styled.img`
    height: 30px;
    weight: 30px;
`;
const TitleItemProject = styled.h1`
    color: ${(props) => props.theme.textColor1};
    ${font5};
    text-align: center;
`;
const ListProject = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
const ItemListProject = styled.li`
    color: ${(props) => props.theme.textColor1};
    ${font3};
    list-style-type: disc;
`;
const TitleProject = styled.h1`
    color: ${(props) => props.theme.textColor1};
    ${font5};
    text-align: center;
    padding: 10px 0;
`;

export { DivData, DivItemProject, DivProject, DivPreview, ImgPreview, VideoPreview, ImgItemMenuProject, ItemMenuProject, ItemListProject, ListProject, TitleItemProject, TitleProject, MenuProject };