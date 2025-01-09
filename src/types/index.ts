import { ITheme } from "../styles";

export type Languages = "PT" | "EN";

type Props = {
  data: {
    theme: ITheme;
    language: Languages;
  };
  sets: {
    theme: (theme: ITheme) => void;
    language: (language: Languages) => void;
  };
};

export default Props;