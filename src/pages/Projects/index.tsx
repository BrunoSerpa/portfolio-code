import { IconAssociation, IconLight, IconPerson, IconTeam, IconTechs } from '../../assets';
import ImgSVG from '../../components/Svg';
import Tech, { TechType } from '../../components/Tech';
import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title } from '../../styles';
import Props from '../../types';
import { DivData, DivItemProject, DivPreview, DivProject, ImgItemMenuProject, ImgPreview, VideoPreview, ItemListProject, ItemMenuProject, ListProject, MenuProject, TitleItemProject, TitleProject } from './style';

type ProjectItemProps = {
    title: string;
    time: string;
    altPreview: string;
    srcPreview: string;
    selectTechs: TechType[];
    descProjectVision?: string;
    descPersonalContributions?: string;
    partners?: string[];
    team?: string[];
};

function isVideo(src: string): boolean {
    return /\.(mp4|webm|ogg)(\?|$)/i.test(src);
}

function ProjectItem({
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
}: Readonly<ProjectItemProps & Props>) {
    return (
        <DivProject theme={data.theme}>
            <DivPreview>
                <TitleProject theme={data.theme}>{title} ({time})</TitleProject>
                {isVideo(srcPreview) ? (
                    <VideoPreview controls>
                        <source src={srcPreview} type="video/mp4" />
                        <source src={srcPreview} type="video/webm" />
                        <source src={srcPreview} type="video/ogg" />
                        Your browser does not support the video tag.
                    </VideoPreview>
                ) : (
                    <ImgPreview src={srcPreview} alt={altPreview} />
                )}
            </DivPreview>
            <DivData>
                <MenuProject>
                    {selectTechs && <ItemMenuProject theme={data.theme} href={`#${title}-Tech`}>
                        <ImgSVG src={IconTechs} height='30' width='30' fill={data.theme.textColor1} />
                        Tecnologias
                    </ItemMenuProject>}
                    {descProjectVision && <ItemMenuProject theme={data.theme} href={`#${title}-Project-Vision`}>
                        <ImgSVG src={IconLight} height='30' width='30' fill={data.theme.textColor1} />
                        Visão do Projeto
                    </ItemMenuProject>}
                    {descPersonalContributions && <ItemMenuProject theme={data.theme} href={`#${title}-Personal-Contributions`}>
                        <ImgItemMenuProject src={IconPerson} alt="Personal-Contributions" />
                        Contribuições Pessoais
                    </ItemMenuProject>}
                    {partners && <ItemMenuProject theme={data.theme} href={`#${title}-Partner`}>
                        <ImgItemMenuProject src={IconAssociation} alt="Partner" />
                        Parceria
                    </ItemMenuProject>}
                    {team && <ItemMenuProject theme={data.theme} href={`#${title}-Team`}>
                        <ImgItemMenuProject src={IconTeam} alt="Team" />
                        Equipe
                    </ItemMenuProject>}
                </MenuProject>
                {selectTechs && <DivItemProject id={`${title}-Tech`}>
                    <TitleItemProject theme={data.theme}>Tecnologias</TitleItemProject>
                    <Tech setting={{ data, sets }} selectTechs={selectTechs} />
                </DivItemProject>}
                {descProjectVision && <DivItemProject id={`${title}-Project-Vision`}>
                    <TitleItemProject theme={data.theme}>Visão do projeto</TitleItemProject>
                    <Paragraph theme={data.theme}>{descProjectVision}</Paragraph>
                </DivItemProject>}
                {descPersonalContributions && <DivItemProject id={`${title}-Personal-Contributions`}>
                    <TitleItemProject theme={data.theme}>Contribuições pessoais</TitleItemProject>
                    <Paragraph theme={data.theme}>{descPersonalContributions}</Paragraph>
                </DivItemProject>}
                {partners && <DivItemProject id={`${title}-Partner`}>
                    <TitleItemProject theme={data.theme}>Parceria</TitleItemProject>
                    <ListProject>
                        {partners.map((partner) =>
                            <ItemListProject key={partner} theme={data.theme}>{partner}</ItemListProject>
                        )}
                    </ListProject>
                </DivItemProject>}
                {team && <DivItemProject id={`${title}-Team`}>
                    <TitleItemProject theme={data.theme}>Equipe</TitleItemProject>
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

export default function Project(project: Readonly<Props>) {
    const tccs: ProjectItemProps[] = [
        {
            title: "Projeto Tecsus",
            time: "2024-2",
            srcPreview: "https://github.com/equipe-javali/API_4/raw/sprint4/docs/MVP.gif",
            altPreview: "4º Semestre",
            selectTechs: [
                "Typescript",
                "React",
                "Git",
                "Arduino",
                "Express",
                "Postgres",
                "Cassandra",
                "Figma"
            ],
            descProjectVision: "O projeto Tecsus tem como objetivo desenvolver um sistema de monitoramento ambiental para prever e mitigar desastres naturais por meio da geração de alertas em tempo real. A solução utiliza sensores estrategicamente posicionados para coleta de dados, que são processados por um sistema inteligente capaz de identificar condições de risco iminente.",
            descPersonalContributions: "Como integrante da equipe de desenvolvimento, atuei principalmente no back-end, desenvolvendo e otimizando funções em TypeScript e Express para manipulação de dados e integração com o banco de dados. Além disso, fui responsável pela modelagem do banco de dados relacional em PostgreSQL, estruturando tabelas e definindo relações que garantiram a integridade e escalabilidade das informações. Também desempenhei um papel ativo na integração de sistemas para processamento de dados em tempo real e supervisionei o controle de qualidade (QA) no DevOps, validando a estabilidade da aplicação e sugerindo melhorias antes do deploy.",
            partners: [
                "Tecsus",
                "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
            ],
            team: [
                "Mariana Izumi - Product Owner",
                "Rafael Nunes - Scrum Master",
                "Bruno Serpa - Scrum Team",
                "Katiane Soares - Scrum Team",
                "Marcus Betti - Scrum Team",
                "Maria Gabriela - Scrum Team",
                "Silmara Bittencourt - Scrum Team"
            ]
        },
        {
            title: "CRTL A",
            time: "2024-1",
            srcPreview: "https://private-user-images.githubusercontent.com/110677265/340157785-647cf17a-d783-4200-a996-2866f25f72ab.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYzNjg4MzgsIm5iZiI6MTczNjM2ODUzOCwicGF0aCI6Ii8xMTA2NzcyNjUvMzQwMTU3Nzg1LTY0N2NmMTdhLWQ3ODMtNDIwMC1hOTk2LTI4NjZmMjVmNzJhYi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEwOFQyMDM1MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMmY1MDYzYmMzOTA0ZjQyZGUzMmI5Yzk3MzkyOTAyNGY5N2E5NjNhYjI0ZDFiYzY0ODY4MDYyOGIxYmJhZTY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.2wOgaKcZBm1T-3vuavkcjMSyGY5QZ_4LLGIMvEnzHtU",
            altPreview: "3º Semestre",
            selectTechs: [
                "Figma",
                "Git",
                "Typescript",
                "Java",
                "Postgres",
                "React",
                "Spring"
            ],
            descProjectVision: "O projeto CRTL A foi desenvolvido com o objetivo de facilitar a gestão de ativos corporativos. A solução permite acompanhar a alocação de ativos, monitorar manutenções programadas e registrar históricos detalhados de uso e movimentação, proporcionando maior controle e eficiência na administração dos recursos da empresa.",
            descPersonalContributions: "Atuei como membro da equipe de desenvolvimento, com foco principal no front-end. Minhas responsabilidades incluíram a criação de interfaces de usuário eficientes, responsivas e alinhadas aos princípios de design centrado no usuário, utilizando React e TypeScript. Também colaborei na integração das interfaces com as APIs desenvolvidas pela equipe back-end, garantindo a funcionalidade e usabilidade do sistema.",
            partners: [
                "Youtan",
                "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
            ],
            team: [
                "Katiane Soares - Product Owner",
                "Caique Silva - Scrum Master",
                "Bruno Serpa - Scrum Team",
                "Maria Gabriela - Scrum Team",
                "Mariana Izumi - Scrum Team",
                "Marcus Betti - Scrum Team",
                "Rafael Nunes - Scrum Team",
                "Silmara Bittencourt - Scrum Team"
            ]
        },
        {
            title: "HERMEZ",
            time: "2023-2",
            srcPreview: "https://github.com/equipedevo/API_2/assets/110677265/65084c5d-fa89-4e81-9733-ca1b2576eb8a",
            altPreview: "2º Semestre",
            selectTechs: [
                "Figma",
                "Git",
                "Javascript",
                "Mysql",
                "React"
            ],
            descProjectVision: "O projeto HERMEZ foi idealizado para desenvolver um sistema robusto de Gerenciamento de Chamados de Serviços. A solução oferece funcionalidades para planejamento, acompanhamento e controle de chamados, além de possibilitar a geração de relatórios analíticos detalhados, auxiliando na tomada de decisões estratégicas e operacionais.",
            descPersonalContributions: "Como membro da equipe de desenvolvimento, fui responsável por implementar funcionalidades no front-end, utilizando React e JavaScript para criar interfaces de usuário interativas, eficientes e responsivas. Também colaborei na integração do front-end com o back-end, assegurando a comunicação eficiente entre as partes. Além disso, atuei no aprimoramento da experiência do usuário por meio de soluções criativas que garantiram uma navegação intuitiva e funcional.",
            partners: [
                "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
            ],
            team: [
                "Gabriel Lucena do Rosário - Product Owner",
                "Pedro Augusto N. Silva - Scrum Master",
                "Bruno Serpa - Scrum Team",
                "Caique Silva - Scrum Team",
                "Mariana Izumi - Scrum Team",
                "Rafael Nunes - Scrum Team"
            ]
        },
        {
            title: "CICLOVALE",
            time: "2023-1",
            srcPreview: "https://github.com/equipedevo/API_1/blob/main/doc/sprint/Site_final.gif?raw=true",
            altPreview: "1º Semestre",
            selectTechs: [
                "Figma",
                "Git",
                "Python",
                "Flask",
                "HTML",
                "CSS",
                "Mysql"
            ],
            descProjectVision: "O CICLOVALE (Central Informativa de COVID Longa do Vale do Paraíba) é uma plataforma desenvolvida para atender jornalistas que buscam informações detalhadas e comparativas sobre os efeitos de longo prazo da COVID-19. A solução oferece acesso facilitado e interativo a dados públicos do Sistema Único de Saúde (SUS), destacando o impacto da COVID longa na região do Vale do Paraíba. Diferentemente de outras iniciativas, o CICLOVALE prioriza a usabilidade e a interatividade na apresentação dos dados.",
            descPersonalContributions: "Como Scrum Master, facilitei as cerimônias ágeis, promovendo uma comunicação clara e ágil dentro da equipe, além de remover impedimentos que poderiam atrasar o progresso do projeto. Atuei como ponte entre os integrantes, auxiliando na colaboração técnica e organizacional, e mantive a documentação atualizada para garantir clareza e alinhamento de todos. Também desempenhei um papel essencial no desenvolvimento do front-end, criando interfaces modernas e responsivas com foco na experiência do usuário.",
            partners: [
                "Vanguarda",
                "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
            ],
            team: [
                "Caique Silva - Product Owner",
                "Bruno Serpa - Scrum Master",
                "Diego José da Conceição - Scrum Team",
                "Gabriel Lucena do Rosário - Scrum Team",
                "Nathalia Ellen Domingos - Scrum Team",
                "João Gabriel Alves Silva - Scrum Team",
                "Pedro Augusto N. Silva - Scrum Team",
                "Rafael Nunes - Scrum Team"
            ]
        }
    ];
    const academicsProject: ProjectItemProps[] = tccs;
    return (
        <DivPage>
            <DivHeader theme={project.data.theme}>
                <NavHeader theme={project.data.theme}>
                    <LinkHeader href='#TCCs' theme={project.data.theme}>TCCs e Projetos Integradores</LinkHeader>
                    <LinkHeader href='#Academic' theme={project.data.theme}>Projetos Acadêmicos</LinkHeader>
                </NavHeader>
            </DivHeader>
            <DivContend id="TCCs">
                <Title theme={project.data.theme}>TCCs e Projetos Integradores</Title>
                {tccs.map((tcc) => (
                    <ProjectItem {...tcc} key={tcc.title} {...project} />
                ))}
            </DivContend>
            <DivContend id="Academic">
                <Title theme={project.data.theme}>Projetos Acadêmicos</Title>
                {academicsProject.map((academic) => (
                    <ProjectItem {...academic} key={academic.title} {...project} />
                ))}
            </DivContend>
        </DivPage>
    );
};
