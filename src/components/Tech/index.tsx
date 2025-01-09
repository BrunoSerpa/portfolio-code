import { IconTechArduino, IconTechCassandra, IconTechCss, IconTechEclipse, IconTechExpress, IconTechFigma, IconTechFlask, IconTechGit, IconTechGithub, IconTechHtml, IconTechJava, IconTechJS, IconTechMongo, IconTechMysql, IconTechNodejs, IconTechPhotoshop, IconTechPostgres, IconTechPy, IconTechReact, IconTechRedis, IconTechSpring, IconTechTS, IconTechVercel, IconTechVscode } from "../../assets";
import Props, { TechType } from "../../types";
import { DivTec, DivTecs, ImageTec, TitleTec } from "./style";


export const allTechs: TechType[] = [
    "Arduino",
    "Cassandra",
    "CSS",
    "Eclipse",
    "Express",
    "Figma",
    "Flask",
    "Git",
    "Github",
    "HTML",
    "Java",
    "Javascript",
    "Mongo",
    "Mysql",
    "Node.js",
    "Photoshop",
    "Postgres",
    "Python",
    "React",
    "Redis",
    "Spring",
    "Typescript",
    "Vercel",
    "Vscode"
];

interface TechItemType {
    src: string;
    alt: string;
    title: TechType;
};

interface TechProps {
    setting: Props;
    selectTechs: TechType[];
};

const techsArray: TechItemType[] = [
    // Languages
    { src: IconTechJS, alt: "Javascript", title: "Javascript" },
    { src: IconTechTS, alt: "Typescript", title: "Typescript" },
    { src: IconTechPy, alt: "Python", title: "Python" },
    { src: IconTechJava, alt: "Java", title: "Java" },
    { src: IconTechHtml, alt: "HTML", title: "HTML" },
    { src: IconTechCss, alt: "CSS", title: "CSS" },

    // Relational Databases
    { src: IconTechPostgres, alt: "Postgres", title: "Postgres" },
    { src: IconTechMysql, alt: "Mysql", title: "Mysql" },

    // Non-Relational Databases
    { src: IconTechMongo, alt: "Mongo", title: "Mongo" },
    { src: IconTechRedis, alt: "Redis", title: "Redis" },
    { src: IconTechCassandra, alt: "Cassandra", title: "Cassandra" },

    // Version Control
    { src: IconTechGit, alt: "Git", title: "Git" },
    { src: IconTechGithub, alt: "Github", title: "Github" },

    // Editors
    { src: IconTechVscode, alt: "Vscode", title: "Vscode" },
    { src: IconTechEclipse, alt: "Eclipse", title: "Eclipse" },

    // Design
    { src: IconTechFigma, alt: "Figma", title: "Figma" },
    { src: IconTechPhotoshop, alt: "Photoshop", title: "Photoshop" },

    // Frameworks
    { src: IconTechReact, alt: "React", title: "React" },
    { src: IconTechExpress, alt: "Express", title: "Express" },
    { src: IconTechSpring, alt: "Spring", title: "Spring" },
    { src: IconTechFlask, alt: "Flask", title: "Flask" },

    // Others
    { src: IconTechVercel, alt: "Vercel", title: "Vercel" },
    { src: IconTechNodejs, alt: "Node.js", title: "Node.js" },
    { src: IconTechArduino, alt: "Arduino", title: "Arduino" }
];

export default function Tech({
    setting,
    selectTechs
}: Readonly<TechProps>) {
    const techs = techsArray.filter((techItem) => selectTechs.includes(techItem.title));

    return (
        <DivTecs>
            {techs.map((techItem) => <DivTec key={techItem.title}>
                <ImageTec src={techItem.src} alt={techItem.alt} theme={setting.data.theme} />
                <TitleTec theme={setting.data.theme}>{techItem.title}</TitleTec>
            </DivTec>)}
        </DivTecs>
    );
}