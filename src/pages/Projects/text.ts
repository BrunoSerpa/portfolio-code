import { ProjectItemType } from "../../types";

export interface TextsProject {
    Titles: {
        TCCs: string;
        Academic: string;
    };
    TCCs: ProjectItemType[];
    Academic: ProjectItemType[];
}

export const textPt: TextsProject = {
    Titles: {
        TCCs: "TCCs e Projetos Integradores",
        Academic: "Projetos Acadêmicos"
    },
    TCCs: [
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
    ],
    Academic: []
};

export const textEn: TextsProject = {
    Titles: {
        TCCs: "TCCs and Integrative Projects",
        Academic: "Academic Projects"
    },
    TCCs: [
        {
            ...textPt.TCCs[0],
            title: "Tecsus Project",
            altPreview: "4th Semester",
            descProjectVision: "The Tecsus project aims to develop an environmental monitoring system to predict and mitigate natural disasters by generating real-time alerts. The solution uses strategically positioned sensors to collect data, which is processed by an intelligent system capable of identifying imminent risk conditions.",
            descPersonalContributions: "As a member of the development team, I primarily worked on the back-end, developing and optimizing functions in TypeScript and Express for data manipulation and database integration. Additionally, I was responsible for modeling the relational database in PostgreSQL, structuring tables, and defining relationships that ensured data integrity and scalability. I also played an active role in integrating systems for real-time data processing and supervised quality control (QA) in DevOps, validating application stability and suggesting improvements before deployment.",
            partners: [
                "Tecsus",
                "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
            ]
        },
        {
            ...textPt.TCCs[1],
            altPreview: "3rd Semester",
            descProjectVision: "The CRTL A project was developed to facilitate corporate asset management. The solution allows tracking asset allocation, monitoring scheduled maintenance, and recording detailed usage and movement histories, providing greater control and efficiency in resource management.",
            descPersonalContributions: "I worked as a member of the development team, primarily focusing on the front-end. My responsibilities included creating efficient, responsive user interfaces aligned with user-centered design principles using React and TypeScript. I also collaborated on integrating the interfaces with the back-end APIs developed by the team, ensuring system functionality and usability.",
            partners: [
                "Youtan",
                "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
            ]
        },
        {
            ...textPt.TCCs[2],
            altPreview: "2nd Semester",
            descProjectVision: "The HERMEZ project was designed to develop a robust Service Call Management system. The solution offers functionalities for planning, tracking, and controlling service calls, as well as generating detailed analytical reports to assist in strategic and operational decision-making.",
            descPersonalContributions: "As a member of the development team, I was responsible for implementing front-end functionalities using React and JavaScript to create interactive, efficient, and responsive user interfaces. I also collaborated on integrating the front-end with the back-end, ensuring efficient communication between the parts. Additionally, I worked on enhancing the user experience through creative solutions that ensured intuitive and functional navigation.",
            partners: [
                "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
            ]
        },
        {
            ...textPt.TCCs[3],
            altPreview: "1st Semester",
            descProjectVision: "CICLOVALE (Informative Center for Long COVID in the Paraíba Valley) is a platform developed to assist journalists seeking detailed and comparative information on the long-term effects of COVID-19. The solution offers easy and interactive access to public data from the Unified Health System (SUS), highlighting the impact of long COVID in the Paraíba Valley region. Unlike other initiatives, CICLOVALE prioritizes usability and interactivity in data presentation.",
            descPersonalContributions: "As Scrum Master, I facilitated agile ceremonies, promoting clear and agile communication within the team, and removing impediments that could delay project progress. I acted as a bridge between team members, assisting in technical and organizational collaboration, and kept documentation up to date to ensure clarity and alignment for all. I also played a key role in front-end development, creating modern and responsive interfaces focused on user experience.",
            partners: [
                "Vanguarda",
                "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
            ]
        }
    ],
    Academic: []
};
