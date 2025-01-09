import { textEn, textPt, TextsAbout } from "./text";
import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title } from "../../styles";
import { Tech, allTechs } from "../../components";
import { Hability, Habilitys } from "./style";
import Props from "../../types";
import { useEffect, useState } from "react";

export default function About({ data, sets }: Readonly<Props>) {
    const [texts, setTexts] = useState<TextsAbout>(textPt);

    useEffect(() => {
        if (data.language === "PT") setTexts(textPt)
        else setTexts(textEn)
    }, [data.language]);

    return (
        <DivPage>
            <DivHeader theme={data.theme}>  
                <NavHeader theme={data.theme}>
                    <LinkHeader href='#General' theme={data.theme}>{texts.Titles.General}</LinkHeader>
                    <LinkHeader href='#Hard' theme={data.theme}>{texts.Titles.Hard}</LinkHeader>
                    <LinkHeader href='#Soft' theme={data.theme}>{texts.Titles.Soft}</LinkHeader>
                </NavHeader>
            </DivHeader>

            <DivContend id="General">
                <Title theme={data.theme}>{texts.Titles.General}</Title>
                <Paragraph theme={data.theme}>{texts.General}</Paragraph>
            </DivContend>

            <DivContend id="Hard">
                <Title theme={data.theme}>{texts.Titles.Hard}</Title>
                <Paragraph theme={data.theme}>{texts.Hard}</Paragraph>
                <Tech setting={{ data, sets }} selectTechs={allTechs} />
            </DivContend>

            <DivContend id="Soft">
                <Title theme={data.theme}>{texts.Titles.Soft}</Title>
                <Paragraph theme={data.theme}>{texts.Soft}</Paragraph>
                <Habilitys theme={data.theme}>
                    {texts.softSkill.map((skill) =>
                        <Hability key={skill} theme={data.theme}>{skill}</Hability>
                    )}
                </Habilitys>
            </DivContend>
        </DivPage>
    );
};