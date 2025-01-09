import { useEffect, useState } from "react";
import Props from "../../types";
import { textEn, textPt, TextsExperience } from "./text";
import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Title } from "../../styles";
import { ExperienceItem } from "../../components";

export default function Experience({ data, sets }: Readonly<Props>) {
    const [texts, setTexts] = useState<TextsExperience>(textPt);

    useEffect(() => {
        if (data.language === "PT") setTexts(textPt)
        else setTexts(textEn)
    }, [data.language]);

    return (
        <DivPage>
            <DivHeader theme={data.theme}>
                <NavHeader theme={data.theme}>
                    <LinkHeader href='#Work' theme={data.theme}>{texts.Titles.Work}</LinkHeader>
                    <LinkHeader href='#Volunteering' theme={data.theme}>{texts.Titles.Volunteering}</LinkHeader>
                </NavHeader>
            </DivHeader>

            <DivContend id="Work">
                <Title theme={data.theme}>{texts.Titles.Work}</Title>
                {texts.Works.map((work) =>
                    <ExperienceItem key={work.title} {...work} setting={{ data, sets }} />
                )}
            </DivContend>

            <DivContend id="Experience">
                <Title theme={data.theme}>{texts.Titles.Volunteering}</Title>
                {texts.Volunteering.map((volunteering) =>
                    <ExperienceItem key={volunteering.title} {...volunteering} setting={{ data, sets }} />
                )}
            </DivContend>
        </DivPage>
    );
}
