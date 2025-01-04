import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Header } from "./components";
import GlobalStyle, { WhiteMode } from "./styles";
import Props from "./types";
import RoutesPage from "./routes";

export default function App() {
  const [theme, setTheme] = useState(WhiteMode);
  const app: Props = {
    data: { theme },
    sets: { theme: setTheme }
  };

  return (
    <BrowserRouter>
      <GlobalStyle theme={theme} />
      <Header {...app} />
      <RoutesPage {...app} />
    </BrowserRouter>
  );
};