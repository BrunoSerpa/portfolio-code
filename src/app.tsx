import { useState } from "react";
import { Header } from "./components";
import Home from "./Pages/Home";
import GlobalStyle, { WhiteMode } from "./styles";
import Prop from "./types";

export default function App() {
  const [theme, setTheme] = useState(WhiteMode);
  const app: Prop = {
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