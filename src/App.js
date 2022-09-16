import { MainContent } from "./styles";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Carousel, CarouselItem } from "./components/Carousel";

export default function App() {
  return (
    <MainContent>
      <NavBar />
      <Header />
      <Projects />
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </MainContent>
  );
}
