import { useEffect, useState } from "react";
import { FlagBrazil, FlagUSA, IconDropdown, IconMenu, IconTheme } from "../../assets";
import Props from "../../types";
import { ButtonMenu, DivContact, DivDropdown, DivFlag, DivFunctions, DivHeader, DivLinks, FunctionTheme, LinkHeader, TextFunctions } from "./style";
import { DarkMode, WhiteMode } from "../../styles";
import ImgSVG from "../Svg";
import Contacts from "../Contacts";
import { textEn, textPt, TextsHeader } from "./text";

export default function Header({ data, sets }: Readonly<Props>) {
    const [showContact, setShowContact] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [texts, setTexts] = useState<TextsHeader>(textPt);

    const changeTheme = () => {
        if (localStorage.getItem("theme") === "default") {
            localStorage.setItem("theme", "dark-mode");
            sets.theme(DarkMode);
        } else {
            localStorage.setItem("theme", "default");
            sets.theme(WhiteMode);
        };
    };

    const changeLanguage = () => {
        if (localStorage.getItem("language") === "PT") {
            localStorage.setItem("language", "EN");
            sets.language("EN");
        } else {
            localStorage.setItem("language", "PT");
            sets.language("PT");
        };
    };

    const toggleDropdown = () => setShowContact(!showContact);;
    const togleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        if (localStorage.getItem("theme") !== "default") sets.theme(DarkMode);
        if (localStorage.getItem("language") !== "PT") sets.language("EN");
    }, [sets]);

    useEffect(() => {
        if (data.language === "PT") setTexts(textPt)
        else setTexts(textEn)
    }, [data.language]);

    return (
        <>
            <DivHeader theme={data.theme}>
                <ButtonMenu showMenu={showMenu} onClick={togleMenu}>
                    <ImgSVG src={IconMenu} height="50" width="50" stroke={data.theme.textColor4} />
                </ButtonMenu>
                <DivLinks theme={data.theme} showMenu={showMenu}>
                    <LinkHeader href="/home" theme={data.theme} onClick={togleMenu}>{texts.Home}</LinkHeader>
                    <LinkHeader href="/about" theme={data.theme} onClick={togleMenu}>{texts.About}</LinkHeader>
                    <LinkHeader href="/experience" theme={data.theme} onClick={togleMenu}>{texts.Experience}</LinkHeader>
                    {/* <LinkHeader href="/formation" theme={data.theme} onClick={togleMenu}>{texts.Formation}</LinkHeader> */}
                    <LinkHeader href="/project" theme={data.theme} onClick={togleMenu}>{texts.Project}</LinkHeader>
                </DivLinks>
                <DivFunctions>
                    <DivContact theme={data.theme} showContact={showContact} onClick={toggleDropdown}>
                        <TextFunctions theme={data.theme} showContact={showContact}>{texts.Contact}</TextFunctions>
                        <DivDropdown showContact={showContact}>
                            <ImgSVG src={IconDropdown} height="20" width="20" path={showContact ? data.theme.textColor1 : data.theme.textColor4} />
                        </DivDropdown>
                    </DivContact>
                    <DivFlag onClick={changeLanguage}>
                        <ImgSVG src={data.language === "PT" ? FlagBrazil : FlagUSA} height="50" width="50" />
                        <TextFunctions theme={data.theme}>{texts.Language}</TextFunctions>
                    </DivFlag>
                    <FunctionTheme onClick={changeTheme}>
                        <ImgSVG src={IconTheme} height="50" width="50" path={data.theme.textColor4} />
                    </FunctionTheme>
                </DivFunctions>
            </DivHeader>
            {showContact && <Contacts data={data} sets={sets} />}
        </>
    );
};