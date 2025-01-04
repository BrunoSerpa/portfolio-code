import { useEffect, useState } from "react";
import { FlagBrazil, IconDropdown, IconTheme } from "../../assets";
import Props from "../../types";
import { DivContact, DivDropdown, DivFlag, DivFunctions, DivHeader, DivLinks, FunctionTheme, LinkHeader, TextFunctions } from "./style";
import { DarkMode, WhiteMode } from "../../styles";
import ImgSVG from "../Svg";
import Contacts from "../Contacts";

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
    }, [header.sets]);

    const [showContact, setShowContact] = useState(false);

    const toggleDropdown = () => {
        setShowContact(!showContact);
    };
    return (
        <>
            <DivHeader theme={header.data.theme}>
                <DivLinks>
                    <LinkHeader href="/home" theme={header.data.theme}>Início</LinkHeader>
                    <LinkHeader href="/about" theme={header.data.theme}>Sobre mim</LinkHeader>
                    <LinkHeader href="/experience" theme={header.data.theme}>Experiência</LinkHeader>
                    <LinkHeader href="/formation" theme={header.data.theme}>Formação</LinkHeader>
                    <LinkHeader href="/project" theme={header.data.theme}>Projetos</LinkHeader>
                </DivLinks>
                <DivFunctions>
                    <DivContact theme={header.data.theme} showContact={showContact} onClick={toggleDropdown}>
                        <TextFunctions theme={header.data.theme} showContact={showContact}>Contato</TextFunctions>
                        <DivDropdown showContact={showContact}>
                            <ImgSVG src={IconDropdown} height="20" width="20" path={showContact ? header.data.theme.textColor1 : header.data.theme.textColor4} />
                        </DivDropdown>
                    </DivContact>
                    <DivFlag>
                        <ImgSVG src={FlagBrazil} height="50" width="50" />
                        <TextFunctions theme={header.data.theme}>Português</TextFunctions>
                    </DivFlag>
                    <FunctionTheme onClick={changeTheme}>
                        <ImgSVG src={IconTheme} height="50" width="50" path={header.data.theme.textColor4} />
                    </FunctionTheme>
                </DivFunctions>
            </DivHeader>
            {showContact && <Contacts {...header} />}
        </>
    );
};