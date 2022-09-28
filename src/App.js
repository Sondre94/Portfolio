import { MainContent, BodyStyling } from "./styles/styles";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Interesser from "./components/Interesser";

export default function App() {
  return (
    <BodyStyling>
      <MainContent>
        <NavBar />
        <Header />
        <Projects />
        <Interesser />
        <About />
      </MainContent>
      <Footer />
    </BodyStyling>
  );
}
