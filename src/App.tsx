import "./App.scss";
import { ImageSlider } from "./Components/ImageSlider/ImageSlider";
import hero1 from "./assets/hero1-unsplash.jpg";
import hero2 from "./assets/hero2-unsplash.jpg";
import hero3 from "./assets/hero3-unsplash.jpg";

function App() {
  const sliderImages = [hero1, hero2, hero3];
  return (
    <>
      <ImageSlider images={sliderImages} />
    </>
  );
}

export default App;
