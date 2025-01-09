export type Languages = "PT" | "EN";

export type Theme = {
  backgroundColor1: string;
  backgroundColor2: string;
  backgroundColor3: string;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
};

type Props = {
  data: {
    theme: Theme;
    language: Languages;
  };
  sets: {
    theme: (theme: Theme) => void;
    language: (language: Languages) => void;
  };
};

export default Props;