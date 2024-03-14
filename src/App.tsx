import { ImageSlider } from "./Components/ImageSlider/ImageSlider";
import { Gallery } from "./Components/Gallery/Gallery";
import { images } from "./data.ts";
import hero1 from "./assets/hero1-unsplash.jpg";
import hero2 from "./assets/hero2-unsplash.jpg";
import hero3 from "./assets/hero3-unsplash.jpg";
import "./App.scss";

function App() {
  const sliderImages = [hero1, hero2, hero3];
  return (
    <>
      <h1 className="display">
        Art <span>Shop</span>
      </h1>
      <ImageSlider images={sliderImages} />
      <h1>Gallery</h1>
      <Gallery images={images.fotografie} />
      <Gallery images={images.kunst} />
      <Gallery images={images.graffiti} />
    </>
  );
}

export default App;
