import { useEffect } from "react";
import { FlagBrazil, IconDropdown, IconTheme } from "../../assets";
import Props from "../../types";
import { DivContact, DivFlag, DivFunctions, DivHeader, DivLinks, FunctionTheme, ImgContact, ImgFunctions, LinkHeader, TextFunctions } from "./style";
import { DarkMode, WhiteMode } from "../../styles";

export default function Header(header: Readonly<Props>) {
    const changeTheme = () => {
        if (localStorage.getItem("theme") === "default") {
            localStorage.setItem("theme", "dark-mode");
            header.sets.theme(DarkMode);
        } else {
            localStorage.setItem("theme", "default");
            header.sets.theme(WhiteMode);
        };
    };

    useEffect(() => {
        if (localStorage.getItem("theme") !== "default") header.sets.theme(DarkMode);
    }, []);

    return (
        <DivHeader theme={header.data.theme}>
            <DivLinks>
                <LinkHeader href="/home" theme={header.data.theme}>Início</LinkHeader>
                <LinkHeader href="/about" theme={header.data.theme}>Sobre mim</LinkHeader>
                <LinkHeader href="/experience" theme={header.data.theme}>Experiência</LinkHeader>
                <LinkHeader href="/formation" theme={header.data.theme}>Formação</LinkHeader>
                <LinkHeader href="/project" theme={header.data.theme}>Projetos</LinkHeader>
            </DivLinks>
            <DivFunctions>
                <DivContact>
                    <TextFunctions theme={header.data.theme}>Contato</TextFunctions>
                    <ImgContact src={IconDropdown} alt="dropdown" />
                </DivContact>
                <DivFlag>
                    <ImgFunctions src={FlagBrazil} alt="flag-brazil" />
                    <TextFunctions theme={header.data.theme}>Português</TextFunctions>
                </DivFlag>
                <FunctionTheme onClick={changeTheme}>
                    <ImgFunctions src={IconTheme} alt="theme" />
                </FunctionTheme>
            </DivFunctions>
        </DivHeader>
    );
};