import { useEffect, useState } from 'react';
import { Me } from '../../assets';
import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title } from '../../styles';
import Props from '../../types';
import { Download, ProfileImg } from './style';
import { textEn, textPt, TextsHome } from './text';

export default function Home({ data }: Readonly<Props>) {
    const [texts, setTexts] = useState<TextsHome>(textPt);

    useEffect(() => {
        if (data.language === "PT") setTexts(textPt)
        else setTexts(textEn)
    }, [data.language]);

    return (
        <DivPage>
            <DivHeader theme={data.theme}>
                <NavHeader theme={data.theme}>
                    <LinkHeader href='#Who' theme={data.theme}>{texts.Titles.Who}</LinkHeader>
                    <LinkHeader href='#Curriculum' theme={data.theme}>{texts.Titles.Curriculum}</LinkHeader>
                    <LinkHeader href='#Portfolio' theme={data.theme}>{texts.Titles.Portfolio}</LinkHeader>
                </NavHeader>
            </DivHeader>

            <DivContend id="Who">
                <Title theme={data.theme}>{texts.Titles.Who}</Title>
                <ProfileImg src={Me} alt="Me" theme={data.theme} />
                {texts.Who.map((paragraph) =>
                    <Paragraph theme={data.theme} key={paragraph}>
                        {paragraph}
                    </Paragraph>
                )}
            </DivContend>

            <DivContend id="Curriculum">
                <Title theme={data.theme}>{texts.Titles.Curriculum}</Title>
                <Download href="../../assets/Curriculum.docx" download theme={data.theme}>Download</Download>
            </DivContend>

            <DivContend id="Portfolio">
                <Title theme={data.theme}>{texts.Titles.Portfolio}</Title>
                <Paragraph theme={data.theme}>
                    {texts.Portfolio}
                </Paragraph>
            </DivContend>
        </DivPage>
    );
};