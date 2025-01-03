import { Header } from "./components";
import Home from "./Pages/Home";
import GlobalStyle from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
};