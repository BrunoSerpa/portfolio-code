
import { IconCopy, IconEmail, IconGithub, IconLinkedin, IconPhone } from "../../assets";
import Props from "../../types";
import ImgSVG from "../Svg";
import { DivContact, DivContacts, LinkContacts, TextContacts } from "./style";

export default function Contacts(contacts: Readonly<Props>) {
    function handleCopy(text: string) {
        navigator.clipboard.writeText(text);
    };
    return (
        <DivContacts theme={contacts.data.theme}>
            <DivContact href="https://github.com/BrunoSerpa" target="_blank">
                <ImgSVG src={IconGithub} height="25" width="25" path={contacts.data.theme.textColor1} />
                <LinkContacts theme={contacts.data.theme}>GitHub</LinkContacts>
            </DivContact>
            <DivContact href="https://www.linkedin.com/in/brunoserpa/" target="_blank">
                <ImgSVG src={IconLinkedin} height="25" width="25" path={contacts.data.theme.textColor1} />
                <LinkContacts theme={contacts.data.theme}>LinkedIn</LinkContacts>
            </DivContact>
            <DivContact onClick={() => handleCopy("brunospc2005@gmail.com")}>
                <ImgSVG src={IconEmail} height="25" width="25" path={contacts.data.theme.textColor1} />
                <TextContacts theme={contacts.data.theme}>brunospc2005@gmail.com</TextContacts>
                <ImgSVG src={IconCopy} height="25" width="25" stroke={contacts.data.theme.textColor1} />
            </DivContact>
            <DivContact onClick={() => handleCopy("+55 (12) 98899-5893")}>
                <ImgSVG src={IconPhone} height="25" width="25" path={contacts.data.theme.textColor1} />
                <TextContacts theme={contacts.data.theme}>+55 (12) 98899-5893</TextContacts>
                <ImgSVG src={IconCopy} height="25" width="25" stroke={contacts.data.theme.textColor1} />
            </DivContact>
        </DivContacts>
    );
}