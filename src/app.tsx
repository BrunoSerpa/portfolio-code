import { useState } from "react";
import { Header } from "./components";
import Home from "./Pages/Home";
import GlobalStyle, { WhiteMode } from "./styles";
import Props from "./types";

export default function App() {
  const [theme, setTheme] = useState(WhiteMode);
  const app: Props = {
    data: { theme },
    sets: { theme: setTheme }
  };

  return (
    <>
      <GlobalStyle theme={theme} />
      <Header {...app} />
      <Home {...app} />
    </>
  );
};