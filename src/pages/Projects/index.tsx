import { IconAssociation, IconLight, IconPerson, IconTeam, IconTechs } from '../../assets';
import ImgSVG from '../../components/Svg';
import Tech, { techType } from '../../components/Tech';
import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title } from '../../styles';
import Props from '../../types';
import { DivData, DivItemProject, DivPreview, DivProject, ImgItemMenuProject, ImgPreview, ItemListProject, ItemMenuProject, ListProject, MenuProject, TitleItemProject, TitleProject } from './style';

type ProjectItemProps = {
    title: string;
    time: string;
    altPreview: string;
    srcPreview: string;
    selectTechs: techType[];
    descProjectVision?: string;
    descPersonalContributions?: string;
    partners?: string[];
    team?: string[];
};

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
            <DivPreview >
                <TitleProject theme={data.theme}>{title} ({time})</TitleProject>
                <ImgPreview src={srcPreview} alt={altPreview} />
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
            altPreview: "MVP 4ªSprint",
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
