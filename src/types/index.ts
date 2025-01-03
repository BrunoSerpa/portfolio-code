import { ITheme } from "../styles";

export default interface Prop {
  data: {
    theme: ITheme;
  };
  sets: {
    theme: (theme: ITheme) => void;
  };
};