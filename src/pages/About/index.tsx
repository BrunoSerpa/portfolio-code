import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title } from '../../styles';
import Props from '../../types';
import { Hability, Habilitys, ImageTec, Tec, Tecs, TitleTec } from './style';

export default function About(about: Readonly<Props>) {
    const hardSkills = [
        { src: "https://skillicons.dev/icons?i=js", alt: "Javascript", title: "Javascript" },
        { src: "https://skillicons.dev/icons?i=py", alt: "Python", title: "Python" },
        { src: "https://skillicons.dev/icons?i=typescript", alt: "Typescript", title: "Typescript" },
        { src: "https://skillicons.dev/icons?i=react", alt: "React", title: "React" },
        { src: "https://skillicons.dev/icons?i=github", alt: "Github", title: "Github" },
        { src: "https://skillicons.dev/icons?i=vercel", alt: "Vercel", title: "Vercel" },
        { src: "https://skillicons.dev/icons?i=git", alt: "Git", title: "Git" },
        { src: "https://skillicons.dev/icons?i=flask", alt: "Flask", title: "Flask" },
        { src: "https://skillicons.dev/icons?i=html", alt: "HTML", title: "HTML" },
        { src: "https://skillicons.dev/icons?i=css", alt: "CSS", title: "CSS" },
        { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js", title: "Node.js" },
        { src: "https://skillicons.dev/icons?i=java", alt: "Java", title: "Java" },
        { src: "https://skillicons.dev/icons?i=arduino", alt: "Arduino", title: "Arduino" },
        { src: "https://skillicons.dev/icons?i=mysql", alt: "Mysql", title: "Mysql" },
        { src: "https://skillicons.dev/icons?i=cassandra", alt: "Cassandra", title: "Cassandra" },
        { src: "https://skillicons.dev/icons?i=figma", alt: "Figma", title: "Figma" },
        { src: "https://skillicons.dev/icons?i=photoshop", alt: "Photoshop", title: "Photoshop" },
        { src: "https://skillicons.dev/icons?i=vscode", alt: "Vscode", title: "Vscode" },
        { src: "https://skillicons.dev/icons?i=eclipse", alt: "Eclipse", title: "Eclipse" },
        { src: "https://skillicons.dev/icons?i=express", alt: "Express", title: "Express" }
    ];
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
                <Tecs>
                    {hardSkills.map((tec) => (
                        <Tec key={tec.title} theme={about.data.theme}>
                            <ImageTec src={tec.src} theme={about.data.theme} alt={tec.alt} />
                            <TitleTec theme={about.data.theme}>{tec.title}</TitleTec>
                        </Tec>
                    ))}
                </Tecs>
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