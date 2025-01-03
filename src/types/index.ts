import { ITheme } from "../styles";

export default interface Props {
  data: {
    theme: ITheme;
  };
  sets: {
    theme: (theme: ITheme) => void;
  };
};