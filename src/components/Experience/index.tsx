import { Paragraph } from "../../styles";
import Props from "../../types";
import { DivExperience, TitleExperience } from "./style";

type ExperienceItemProps = {
    title: string;
    paragraph: string;
    time: string;
    setting: Props;
};

export default function ExperienceItem({ title, paragraph, time, setting }: Readonly<ExperienceItemProps>) {
    return (
        <DivExperience>
            <TitleExperience theme={setting.data.theme}>
                {title} ({time})
            </TitleExperience>
            <Paragraph theme={setting.data.theme}>
                {paragraph}
            </Paragraph>
        </DivExperience>
    );
};