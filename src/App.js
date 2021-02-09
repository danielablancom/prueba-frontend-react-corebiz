import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import CarouselItems from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <CarouselItems />
    </div>
  );
}

export default App;
