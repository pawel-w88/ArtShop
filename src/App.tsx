import { useState } from "react";
import { ImageSlider } from "./Components/ImageSlider/ImageSlider";
import { Gallery } from "./Components/Gallery/Gallery";
import { images } from "./data.ts";
import hero1 from "./assets/hero1-unsplash.jpg";
import hero2 from "./assets/hero2-unsplash.jpg";
import hero3 from "./assets/hero3-unsplash.jpg";
import { Navbar } from "./Components/Navbar/Navbar.tsx";
import { Button } from "./Components/Button/Button.tsx";
import ThemeContext from "./ThemeContext";
import ReactSwitch from "react-switch";
import { CloudMoon, Sun } from "lucide-react";
import "./App.scss";

function App() {
  const sliderImages = [hero1, hero2, hero3];
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={darkMode.toString()}>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        <div className="width-max">
        <Navbar>
          <div className="display">
            <h1>Art</h1>
            <span>Shop</span>
          </div>
          <div>
            <Button onClick={() => {}}>Mein Konto</Button>
            <Button onClick={() => {}}>Merkliste</Button>
            <Button onClick={() => {}}>Warenkorb</Button>
            <ReactSwitch
              onChange={setDarkMode}
              checked={darkMode}
              offColor={"#f49b27"}
              onColor={"#f49b27"}
              checkedIcon={<CloudMoon />}
              uncheckedIcon={<Sun />}
            />
          </div>
        </Navbar>
        <ImageSlider images={sliderImages} />
        <h2>Kunstgalerie</h2>
        <h3>{images.fotografie[0].type}</h3>
        <Gallery images={images.fotografie} />
        <h3>{images.kunst[0].type}</h3>
        <Gallery images={images.kunst} />
        <h3>{images.graffiti[0].type}</h3>
        <Gallery images={images.graffiti} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
