interface ITheme {
    backgroundColor1: string;
    backgroundColor2: string;
    backgroundColor3: string;
    textColor1: string;
    textColor2: string;
    textColor3: string;
    textColor4: string;
};

const WhiteMode: ITheme = {
    backgroundColor1: "#D8EDEE",
    backgroundColor2: "#BAD9D4",
    backgroundColor3: "#175049",
    textColor1: "#182825",
    textColor2: "#0D201E",
    textColor3: "#00332E",
    textColor4: "#DDE4E4"
};

const DarkMode: ITheme = {
    backgroundColor1: "#175049",
    backgroundColor2: "#BAD9D4",
    backgroundColor3: "#D8EDEE",
    textColor1: "#DDE4E4",
    textColor2: "#00332E",
    textColor3: "#0D201E",
    textColor4: "#182825"
};

export default ITheme;
export { DarkMode, WhiteMode };