import { FlagBrazil, IconDropdown, IconTheme } from "../../assets";
import { DivContact, DivFlag, DivFunctions, DivHeader, DivLinks, ImgContact, ImgFunctions, LinkHeader, TextFunctions } from "./style";

export default function Header() {
    return (
        <DivHeader>
            <DivLinks>
                <LinkHeader href="/home">Início</LinkHeader>
                <LinkHeader href="/about">Sobre mim</LinkHeader>
                <LinkHeader href="/experience">Experiência</LinkHeader>
                <LinkHeader href="/formation">Formação</LinkHeader>
                <LinkHeader href="/project">Projetos</LinkHeader>
            </DivLinks>
            <DivFunctions>
                <DivContact>
                    <TextFunctions>Contato</TextFunctions>
                    <ImgContact src={IconDropdown} alt="dropdown" />
                </DivContact>
                <DivFlag>
                    <ImgFunctions src={FlagBrazil} alt="flag-brazil" />
                    <TextFunctions>Português</TextFunctions>
                </DivFlag>
                <ImgFunctions src={IconTheme} alt="theme" />
            </DivFunctions>
        </DivHeader>
    );
};