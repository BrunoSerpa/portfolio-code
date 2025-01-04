import { Me } from '../../assets';
import { DivContend, DivHeader, DivPage, LinkHeader, NavHeader, Paragraph, Title } from '../../styles';
import Props from '../../types';
import { Download, ProfileImg } from './style';

export default function Home(home: Readonly<Props>) {
    return (
        <DivPage>
            <DivHeader theme={home.data.theme}>
                <NavHeader theme={home.data.theme}>
                    <LinkHeader href='#QuemSou' theme={home.data.theme}>Quem sou</LinkHeader>
                    <LinkHeader href='#Curriculo' theme={home.data.theme}>Curriculo</LinkHeader>
                    <LinkHeader href='#Portfolio' theme={home.data.theme}>Portfólio</LinkHeader>
                </NavHeader>
            </DivHeader>
            <DivContend id="QuemSou">
                <Title theme={home.data.theme}>Quem sou</Title>
                <ProfileImg src={Me} alt="Me" theme={home.data.theme} />
                <Paragraph theme={home.data.theme}>
                    Meu nome é Bruno Serpa Pereira Carvalho, tenho 19 anos e sou Técnico em Desenvolvimento de Sistemas pela Escola Técnica Estadual Professora Ilza Nascimento Pintus. Atualmente, estou cursando o Tecnólogo em Desenvolvimento de Software Multiplataforma. Minha formação acadêmica e experiência prática construíram uma base sólida em tecnologias e metodologias modernas, com foco na criação de projetos funcionais e de alto desempenho.
                </Paragraph>
                <Paragraph theme={home.data.theme}>
                    Tenho experiência em uma ampla variedade de ferramentas e linguagens de programação, como Git, GitHub, Python, TypeScript, JavaScript, e frameworks como React, React Native e Express. Além disso, possuo conhecimento em bancos de dados relacionais e não relacionais, como PostgreSQL, MySQL, SQL Server, Cassandra, MongoDB e Redis, permitindo-me desenvolver sistemas robustos e adaptáveis a diferentes demandas.
                </Paragraph>
                <Paragraph theme={home.data.theme}>
                    Minha meta profissional é aprimorar constantemente minhas habilidades técnicas e contribuir para o desenvolvimento de projetos inovadores que agreguem valor, otimizem processos e ofereçam soluções práticas e eficazes aos usuários.
                </Paragraph>
            </DivContend>
            <DivContend id="Curriculo">
                <Title theme={home.data.theme}>Currículo</Title>
                <Download href="..\..\assets\Curriculum.docx" download theme={home.data.theme} >Download</Download>
            </DivContend>
            <DivContend id="Portfolio">
                <Title theme={home.data.theme}>Portfólio</Title>
                <Paragraph theme={home.data.theme}>
                    Este projeto foi desenvolvido utilizando React e TypeScript, com o código hospedado no Vercel e no GitHub. Durante o processo, o projeto foi inicialmente prototipado no Figma, garantindo um planejamento visual eficiente e alinhado com os objetivos. Apliquei boas práticas de programação e técnicas adquiridas ao longo da minha formação, assegurando a qualidade e a saúde do código por meio de análises realizadas com o SonarCloud.
                </Paragraph>
            </DivContend>
        </DivPage>
    );
};