import { ImageSlider } from "./Components/ImageSlider/ImageSlider";
import { Gallery } from "./Components/Gallery/Gallery";
import { images } from "./data.ts";
import hero1 from "./assets/hero1-unsplash.jpg";
import hero2 from "./assets/hero2-unsplash.jpg";
import hero3 from "./assets/hero3-unsplash.jpg";
import "./App.scss";
import { Navbar } from "./Components/Navbar/Navbar.tsx";
import { Button } from "./Components/Button/Button.tsx";

function App() {
  const sliderImages = [hero1, hero2, hero3];
  return (
    <>
      <Navbar>
        <Button onClick={() => {}}>Mein Konto</Button>
        <Button onClick={() => {}}>Merkliste</Button>
        <Button onClick={() => {}}>Warenkorb</Button>
      </Navbar>
      <div className="display">
        <h1>Art</h1>
        <span>Shop</span>
      </div>
      <ImageSlider images={sliderImages} />
      <h1>Gallery</h1>
      <Gallery images={images.fotografie} />
      <Gallery images={images.kunst} />
      <Gallery images={images.graffiti} />
    </>
  );
}

export default App;
