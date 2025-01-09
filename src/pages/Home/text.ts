export interface TextsHome {
    Titles: {
        Who: string;
        Curriculum: string;
        Portfolio: string;
    };
    Who: string[];
    Portfolio: string;
}

export const textPt: TextsHome = {
    Titles: {
        Who: "Quem sou",
        Curriculum: "Currículo",
        Portfolio: "Portfólio"
    },
    Who: [
        "Meu nome é Bruno Serpa Pereira Carvalho, tenho 19 anos e sou Técnico em Desenvolvimento de Sistemas pela Escola Técnica Estadual Professora Ilza Nascimento Pintus. Atualmente, estou cursando o Tecnólogo em Desenvolvimento de Software Multiplataforma. Minha formação acadêmica e experiência prática construíram uma base sólida em tecnologias e metodologias modernas, com foco na criação de projetos funcionais e de alto desempenho.",
        "Tenho experiência em uma ampla variedade de ferramentas e linguagens de programação, como Git, GitHub, Python, TypeScript, JavaScript, e frameworks como React, React Native e Express. Além disso, possuo conhecimento em bancos de dados relacionais e não relacionais, como PostgreSQL, MySQL, SQL Server, Cassandra, MongoDB e Redis, permitindo-me desenvolver sistemas robustos e adaptáveis a diferentes demandas.",
        "Minha meta profissional é aprimorar constantemente minhas habilidades técnicas e contribuir para o desenvolvimento de projetos inovadores que agreguem valor, otimizem processos e ofereçam soluções práticas e eficazes aos usuários."
    ],
    Portfolio: "Este projeto foi desenvolvido utilizando React e TypeScript, com o código hospedado no Vercel e no GitHub. Durante o processo, o projeto foi inicialmente prototipado no Figma, garantindo um planejamento visual eficiente e alinhado com os objetivos. Apliquei boas práticas de programação e técnicas adquiridas ao longo da minha formação, assegurando a qualidade e a saúde do código por meio de análises realizadas com o SonarCloud."
};

export const textEn: TextsHome = {
    Titles: {
        Who: "Who I am",
        Curriculum: "Curriculum",
        Portfolio: "Portfolio"
    },
    Who: [
        "My name is Bruno Serpa Pereira Carvalho, I am 19 years old and I am a Systems Development Technician from the State Technical School Professor Ilza Nascimento Pintus. I am currently studying for a degree in Multiplatform Software Development. My academic background and practical experience have built a solid foundation in modern technologies and methodologies, focusing on creating functional and high-performance projects.",
        "I have experience with a wide variety of tools and programming languages, such as Git, GitHub, Python, TypeScript, JavaScript, and frameworks like React, React Native, and Express. Additionally, I have knowledge in relational and non-relational databases, such as PostgreSQL, MySQL, SQL Server, Cassandra, MongoDB, and Redis, allowing me to develop robust systems adaptable to different demands.",
        "My professional goal is to constantly improve my technical skills and contribute to the development of innovative projects that add value, optimize processes, and provide practical and effective solutions to users."
    ],
    Portfolio: "This project was developed using React and TypeScript, with the code hosted on Vercel and GitHub. During the process, the project was initially prototyped in Figma, ensuring efficient visual planning aligned with the objectives. I applied good programming practices and techniques acquired throughout my training, ensuring code quality and health through analyses performed with SonarCloud."
};