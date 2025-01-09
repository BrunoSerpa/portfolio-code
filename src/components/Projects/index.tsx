import { useEffect, useState } from "react";
import { IconAssociation, IconLight, IconPerson, IconTeam, IconTechs } from "../../assets";
import { Paragraph } from "../../styles";
import Props, { ProjectItemType } from "../../types";
import ImgSVG from "../Svg";
import Tech from "../Tech";
import { DivData, DivItemProject, DivPreview, DivProject, ImgPreview, ItemListProject, ItemMenuProject, ListProject, MenuProject, TitleItemProject, TitleProject, VideoPreview } from "./style";
import { textEn, textPt, TextsProjectItem } from "./texts";

export default function ProjectItem({
    title,
    time,
    altPreview,
    srcPreview,
    selectTechs,
    data,
    descProjectVision,
    descPersonalContributions,
    partners,
    team,
    sets
}: Readonly<ProjectItemType & Props>) {
    const [texts, setTexts] = useState<TextsProjectItem>(textPt);
    const isVideo = (src: string): boolean => { return /\.(mp4|webm|ogg)(\?|$)/i.test(src); }

    useEffect(() => {
        if (data.language === "PT") setTexts(textPt)
        else setTexts(textEn)
    }, [data.language]);

    return (
        <DivProject theme={data.theme}>
            <DivPreview>
                <TitleProject theme={data.theme}>{title} ({time})</TitleProject>
                {isVideo(srcPreview) ? <VideoPreview controls>
                    <source src={srcPreview} type="video/mp4" />
                    <source src={srcPreview} type="video/webm" />
                    <source src={srcPreview} type="video/ogg" />
                </VideoPreview> : <ImgPreview src={srcPreview} alt={altPreview} />}
            </DivPreview>
            <DivData>
                <MenuProject>
                    {selectTechs && <ItemMenuProject theme={data.theme} href={`#${title}-Tech`}>
                        <ImgSVG src={IconTechs} height='30' width='30' stroke={data.theme.textColor1} />
                        {texts.technologies}
                    </ItemMenuProject>}
                    {descProjectVision && <ItemMenuProject theme={data.theme} href={`#${title}-Project-Vision`}>
                        <ImgSVG src={IconLight} height='30' width='30' path={data.theme.textColor1} />
                        {texts.vision}
                    </ItemMenuProject>}
                    {descPersonalContributions && <ItemMenuProject theme={data.theme} href={`#${title}-Personal-Contributions`}>
                        <ImgSVG src={IconPerson} height='30' width='30' path={data.theme.textColor1} />
                        {texts.contributions}
                    </ItemMenuProject>}
                    {partners && <ItemMenuProject theme={data.theme} href={`#${title}-Partner`}>
                        <ImgSVG src={IconAssociation} height='30' width='30' path={data.theme.textColor1} />
                        {texts.partnership}
                    </ItemMenuProject>}
                    {team && <ItemMenuProject theme={data.theme} href={`#${title}-Team`}>
                        <ImgSVG src={IconTeam} height='30' width='30' path={data.theme.textColor1} />
                        {texts.team}
                    </ItemMenuProject>}
                </MenuProject>
                {selectTechs && <DivItemProject id={`${title}-Tech`}>
                    <TitleItemProject theme={data.theme}>{texts.technologies}</TitleItemProject>
                    <Tech setting={{ data, sets }} selectTechs={selectTechs} />
                </DivItemProject>}
                {descProjectVision && <DivItemProject id={`${title}-Project-Vision`}>
                    <TitleItemProject theme={data.theme}>{texts.vision}</TitleItemProject>
                    <Paragraph theme={data.theme}>{descProjectVision}</Paragraph>
                </DivItemProject>}
                {descPersonalContributions && <DivItemProject id={`${title}-Personal-Contributions`}>
                    <TitleItemProject theme={data.theme}>{texts.contributions}</TitleItemProject>
                    <Paragraph theme={data.theme}>{descPersonalContributions}</Paragraph>
                </DivItemProject>}
                {partners && <DivItemProject id={`${title}-Partner`}>
                    <TitleItemProject theme={data.theme}>{texts.partnership}</TitleItemProject>
                    <ListProject>
                        {partners.map((partner) =>
                            <ItemListProject key={partner} theme={data.theme}>{partner}</ItemListProject>
                        )}
                    </ListProject>
                </DivItemProject>}
                {team && <DivItemProject id={`${title}-Team`}>
                    <TitleItemProject theme={data.theme}>{texts.team}</TitleItemProject>
                    <ListProject>
                        {team.map((member) =>
                            <ItemListProject key={member} theme={data.theme}>{member}</ItemListProject>
                        )}
                    </ListProject>
                </DivItemProject>}
            </DivData>
        </DivProject>
    );
}
