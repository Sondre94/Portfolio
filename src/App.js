import { MainContent } from "./styles";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function App() {
  return (
    <MainContent>
      <NavBar />
      <Header />
      <Projects />
    </MainContent>
  );
}
