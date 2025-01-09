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
    { src: "https://skillicons.dev/icons?i=js", alt: "Javascript", title: "Javascript" },
    { src: "https://skillicons.dev/icons?i=typescript", alt: "Typescript", title: "Typescript" },
    { src: "https://skillicons.dev/icons?i=py", alt: "Python", title: "Python" },
    { src: "https://skillicons.dev/icons?i=java", alt: "Java", title: "Java" },
    { src: "https://skillicons.dev/icons?i=html", alt: "HTML", title: "HTML" },
    { src: "https://skillicons.dev/icons?i=css", alt: "CSS", title: "CSS" },

    // Relational Databases
    { src: "https://skillicons.dev/icons?i=postgres", alt: "Postgres", title: "Postgres" },
    { src: "https://skillicons.dev/icons?i=mysql", alt: "Mysql", title: "Mysql" },

    // Non-Relational Databases
    { src: "https://skillicons.dev/icons?i=mongo", alt: "Mongo", title: "Mongo" },
    { src: "https://skillicons.dev/icons?i=redis", alt: "Redis", title: "Redis" },
    { src: "https://skillicons.dev/icons?i=cassandra", alt: "Cassandra", title: "Cassandra" },

    // Version Control
    { src: "https://skillicons.dev/icons?i=git", alt: "Git", title: "Git" },
    { src: "https://skillicons.dev/icons?i=github", alt: "Github", title: "Github" },

    // Editors
    { src: "https://skillicons.dev/icons?i=vscode", alt: "Vscode", title: "Vscode" },
    { src: "https://skillicons.dev/icons?i=eclipse", alt: "Eclipse", title: "Eclipse" },

    // Design
    { src: "https://skillicons.dev/icons?i=figma", alt: "Figma", title: "Figma" },
    { src: "https://skillicons.dev/icons?i=photoshop", alt: "Photoshop", title: "Photoshop" },

    // Frameworks
    { src: "https://skillicons.dev/icons?i=react", alt: "React", title: "React" },
    { src: "https://skillicons.dev/icons?i=express", alt: "Express", title: "Express" },
    { src: "https://skillicons.dev/icons?i=spring", alt: "Spring", title: "Spring" },
    { src: "https://skillicons.dev/icons?i=flask", alt: "Flask", title: "Flask" },

    // Others
    { src: "https://skillicons.dev/icons?i=vercel", alt: "Vercel", title: "Vercel" },
    { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js", title: "Node.js" },
    { src: "https://skillicons.dev/icons?i=arduino", alt: "Arduino", title: "Arduino" }
];

export default function Tech({
    setting,
    selectTechs
}: Readonly<TechProps>) {
    const techs = techsArray.filter((techItem) => selectTechs.includes(techItem.title));

    return (
        <DivTecs>
            {techs.map((techItem) => <DivTec key={techItem.title}>
                <ImageTec src={techItem.src} alt={techItem.alt} />
                <TitleTec theme={setting.data.theme}>{techItem.title}</TitleTec>
            </DivTec>)}
        </DivTecs>
    );
}