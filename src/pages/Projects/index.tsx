import { useEffect, useState } from "react";
import Props from "../../types";
import { textEn, textPt, TextsProject } from "./text";
import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Title } from "../../styles";
import { ProjectItem } from "../../components";

export default function Project({ data, sets }: Readonly<Props>) {
    const [texts, setTexts] = useState<TextsProject>(textPt);

    useEffect(() => {
        if (data.language === "PT") setTexts(textPt)
        else setTexts(textEn)
    }, [data.language]);

    return (
        <DivPage>
            <DivHeader theme={data.theme}>
                <NavHeader theme={data.theme}>
                    <LinkHeader href='#TCCs' theme={data.theme}>{texts.Titles.TCCs}</LinkHeader>
                    <LinkHeader href='#Academic' theme={data.theme}>{texts.Titles.Academic}</LinkHeader>
                </NavHeader>
            </DivHeader>

            <DivContend id="TCCs">
                <Title theme={data.theme}>{texts.Titles.TCCs}</Title>
                {texts.TCCs.map((tcc) =>
                    <ProjectItem {...tcc} key={tcc.title} data={data} sets={sets} />
                )}
            </DivContend>

            <DivContend id="Academic">
                <Title theme={data.theme}>{texts.Titles.Academic}</Title>
                {texts.Academic.map((academic) =>
                    <ProjectItem {...academic} key={academic.title} data={data} sets={sets} />
                )}
            </DivContend>
        </DivPage>
    );
};