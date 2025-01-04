import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title } from '../../styles';
import Props from '../../types';
import { DivExperience, TitleExperience } from './style';

type Experience = {
    title: string;
    paragraph: string;
    time: string;
}

export default function Experience(experience: Readonly<Props>) {
    function ExperienceItem({ title, paragraph, time }: Experience) {
        return (
            <DivExperience>
                <TitleExperience theme={experience.data.theme}>{title} ({time})</TitleExperience>
                <Paragraph theme={experience.data.theme}>{paragraph}</Paragraph>
            </DivExperience>
        );
    }
    const works = [
        {
            title: 'Aprendiz',
            time: '01/12/2022 - Atual',
            paragraph: 'Atuo na SOS ECO BIKE, localizada na Avenida Presidente Juscelino Kubitschek, 4946 - Monte Castelo, São José dos Campos - SP. Minhas atividades são focadas principalmente no atendimento ao cliente e na manutenção mecânica de bicicletas. Entre minhas responsabilidades estão garantir a satisfação dos clientes por meio de um atendimento de qualidade e realizar reparos e ajustes técnicos, assegurando o pleno funcionamento e a segurança das bicicletas.'
        }
    ];
    const volunteering = [
        {
            title: 'Multimidia',
            time: '01/01/2021 - Atual',
            paragraph: 'Atuo na Igreja Evangélica Pentecostal Deus é Fiel, localizada na Rua Riachuelo, 190 - Jardim Paulista, São José dos Campos - SP. Minhas responsabilidades incluem o controle da mesa de som e do projetor, garantindo a qualidade do áudio e das apresentações visuais durante os eventos e cultos.'
        }
    ];
    return (
        <DivPage>
            <DivHeader theme={experience.data.theme}>
                <NavHeader theme={experience.data.theme}>
                    <LinkHeader href='#Work' theme={experience.data.theme}>Trabalhos</LinkHeader>
                    <LinkHeader href='#Volunteering' theme={experience.data.theme}>Voluntariados</LinkHeader>
                </NavHeader>
            </DivHeader>
            <DivContend id="Work">
                <Title theme={experience.data.theme}>Trabalhos</Title>
                {works.map((work) => (
                    <ExperienceItem key={work.title} {...work} />
                ))}
            </DivContend>
            <DivContend id="Experience">
                <Title theme={experience.data.theme}>Currículo</Title>
                {volunteering.map((volunteering) => (
                    <ExperienceItem key={volunteering.title} {...volunteering} />
                ))}
            </DivContend>
        </DivPage>
    );
};
