import Props from "../../types";
import { DivTec, DivTecs, ImageTec, TitleTec } from "./style";

export type TechType = "Javascript" | "Python" | "Typescript" | "React" | "Github" | "Vercel" | "Git" | "Flask" | "HTML" | "CSS" | "Node.js" | "Java" | "Arduino" | "Mysql" | "Cassandra" | "Figma" | "Photoshop" | "Postgres" | "Vscode" | "Eclipse" | "Express" | "Spring";

interface TechItemType {
    src: string;
    alt: string;
    title: TechType;
}

interface TechProps {
    setting: Props;
    selectTechs: TechType[]
};

const techsArray: TechItemType[] = [
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
    { src: "https://skillicons.dev/icons?i=postgres", alt: "Postgres", title: "Postgres" },
    { src: "https://skillicons.dev/icons?i=mysql", alt: "Mysql", title: "Mysql" },
    { src: "https://skillicons.dev/icons?i=cassandra", alt: "Cassandra", title: "Cassandra" },
    { src: "https://skillicons.dev/icons?i=figma", alt: "Figma", title: "Figma" },
    { src: "https://skillicons.dev/icons?i=photoshop", alt: "Photoshop", title: "Photoshop" },
    { src: "https://skillicons.dev/icons?i=vscode", alt: "Vscode", title: "Vscode" },
    { src: "https://skillicons.dev/icons?i=eclipse", alt: "Eclipse", title: "Eclipse" },
    { src: "https://skillicons.dev/icons?i=express", alt: "Express", title: "Express" },
    { src: "https://skillicons.dev/icons?i=spring", alt: "Spring", title: "Spring" }
];

export default function Tech({
    setting,
    selectTechs
}: Readonly<TechProps>) {
    const techs = techsArray
        .filter((techItem) => selectTechs.includes(techItem.title));
    return (
        <DivTecs>
            {techs.map((techItem) => (
                <DivTec key={techItem.title}>
                    <ImageTec src={techItem.src} alt={techItem.alt} />
                    <TitleTec theme={setting.data.theme}>{techItem.title}</TitleTec>
                </DivTec>
            ))}
        </DivTecs>
    );
};