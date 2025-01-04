
import { IconCopy, IconEmail, IconGithub, IconLinkedin, IconPhone } from "../../assets";
import Props from "../../types";
import ImgSVG from "../Svg";
import { DivContact, DivContacts, LinkContacts, TextContacts } from "./style";

export default function Contacts(contacts: Readonly<Props>) {
    return (
        <>
            <DivContacts theme={contacts.data.theme}>
                <DivContact>
                    <ImgSVG src={IconGithub} height="25" width="25" path={contacts.data.theme.textColor1} />
                    <LinkContacts theme={contacts.data.theme}>GitHub</LinkContacts>
                </DivContact>
                <DivContact>
                    <ImgSVG src={IconLinkedin} height="25" width="25" path={contacts.data.theme.textColor1} />
                    <LinkContacts theme={contacts.data.theme}>LinkedIn</LinkContacts>
                </DivContact>
                <DivContact>
                    <ImgSVG src={IconEmail} height="25" width="25" path={contacts.data.theme.textColor1} />
                    <TextContacts theme={contacts.data.theme}>Email</TextContacts>
                    <ImgSVG src={IconCopy} height="25" width="25" fill={contacts.data.theme.textColor1} />
                </DivContact>
                <DivContact>
                    <ImgSVG src={IconPhone} height="25" width="25" path={contacts.data.theme.textColor1} />
                    <TextContacts theme={contacts.data.theme}>Telefone</TextContacts>
                    <ImgSVG src={IconCopy} height="25" width="25" fill={contacts.data.theme.textColor1} />
                </DivContact>
            </DivContacts>
        </>
    );
}