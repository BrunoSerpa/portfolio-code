import Tech from '../../components/Tech';
import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title } from '../../styles';
import Props from '../../types';
import { Hability, Habilitys } from './style';

export default function About(about: Readonly<Props>) {
    const softSkill = [
        "Organização",
        "Pensamento criativo",
        "Resiliência",
        "Flexibilidade",
        "Empatia",
        "Colaboração",
        "Trabalhar sob pressão",
        "Capacidade de resolver problemas"
    ]
    return (
        <DivPage>
            <DivHeader theme={about.data.theme}>
                <NavHeader theme={about.data.theme}>
                    <LinkHeader href='#General' theme={about.data.theme}>Informações Gerais</LinkHeader>
                    <LinkHeader href='#Hard' theme={about.data.theme}>Hard Skills</LinkHeader>
                    <LinkHeader href='#Soft' theme={about.data.theme}>Soft Skills</LinkHeader>
                </NavHeader>
            </DivHeader>
            <DivContend id="General">
                <Title theme={about.data.theme}>Informações Gerais</Title>
                <Paragraph theme={about.data.theme}>
                    Sou Bruno Serpa Pereira Carvalho, tenho 19 anos e sou Técnico em Desenvolvimento de Sistemas. Atualmente, estou no meu último ano do curso Tecnólogo em Desenvolvimento de Software Multiplataforma.
                </Paragraph>
            </DivContend>
            <DivContend id="Hard">
                <Title theme={about.data.theme}>Hard Skills</Title>
                <Paragraph theme={about.data.theme}>
                    Tenho expandido continuamente meus conhecimentos e habilidades em tecnologias. Atualmente, sou proficiente nas seguintes tecnologias:
                </Paragraph>
                <Tech setting={about} selectTechs={[
                    'Arduino',
                    'CSS',
                    'Cassandra',
                    'Eclipse',
                    'Express',
                    'Figma',
                    'Flask',
                    'Git',
                    'Github',
                    'HTML',
                    'Java',
                    'Javascript',
                    'Mysql',
                    'Node.js',
                    'Photoshop',
                    'Python',
                    'React',
                    'Typescript',
                    'Vercel',
                    'Vscode'
                ]} />
            </DivContend>
            <DivContend id="Soft">
                <Title theme={about.data.theme}>Soft Skills</Title>
                <Paragraph theme={about.data.theme}>
                    Além dos estudos técnicos, também me dedico ao autoconhecimento, trabalhando continuamente no meu autocontrole emocional e psicológico. Dessa forma, tenho aprimorado as seguintes habilidades:
                </Paragraph>
                <Habilitys theme={about.data.theme}>
                    {softSkill.map((skill) => (
                        <Hability key={skill} theme={about.data.theme}>{skill}</Hability>
                    ))}
                </Habilitys>
            </DivContend>
        </DivPage>
    );
};