import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Header } from "./components";
import GlobalStyle, { WhiteMode } from "./styles";
import Props, { Languages } from "./types";
import RoutesPage from "./routes";

export default function App() {
  const [theme, setTheme] = useState(WhiteMode);
  const [language, setLanguage] = useState<Languages>("PT");
  const app: Props = {
    data: { theme, language },
    sets: { theme: setTheme, language: setLanguage }
  };

  return (
    <BrowserRouter>
      <GlobalStyle theme={theme} />
      <Header {...app} />
      <RoutesPage {...app} />
    </BrowserRouter>
  );
};