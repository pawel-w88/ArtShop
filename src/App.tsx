import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { images } from "./data.ts";
import hero1 from "./assets/hero1-unsplash.jpg";
import hero2 from "./assets/hero2-unsplash.jpg";
import hero3 from "./assets/hero3-unsplash.jpg";
import { ImageSlider } from "./Components/ImageSlider/ImageSlider";
import { Gallery } from "./Components/Gallery/Gallery";
import { Navbar } from "./Components/Navbar/Navbar.tsx";
import { Button } from "./Components/Button/Button.tsx";
import { Logo } from "./Components/Logo/Logo.tsx";
import { Warenkorb } from "./Pages/ShoppingCard/ShoppingCard.tsx";
import ThemeContext from "./ThemeContext";
import { CloudMoon, Sun } from "lucide-react";
import "./App.scss";

function App() {
  const sliderImages: string[] = [hero1, hero2, hero3];
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [cart, setCart] = useState<
    { id: number; name: string; price: number; quantity: number }[]
  >([]);

  const addItem = (id: number, name: string, price: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.price + item.price,
              }
            : item
        )
      );
    } else {
      setCart([...cart, { id, name, price, quantity: 1 }]);
    }
  };

  const Home = () => {
    return (
      <>
        <ImageSlider images={sliderImages} />
        <h2>Kunstgalerie</h2>
        <h3>{images.fotografie[0].type}</h3>
        <Gallery images={images.fotografie} addItem={addItem} />
        <h3>{images.kunst[0].type}</h3>
        <Gallery images={images.kunst} addItem={addItem} />
        <h3>{images.graffiti[0].type}</h3>
        <Gallery images={images.graffiti} addItem={addItem} />
      </>
    );
  };

  return (
    <ThemeContext.Provider value={darkMode.toString()}>
      <Router>
        <div className={`App ${darkMode ? "dark" : "light"}`}>
          <div className="width-max">
            <Navbar>
              <Logo />
              <div>
                <Button onClick={() => {}}><Link to="/">Home</Link></Button>
                <Button onClick={() => {}}>Merkliste</Button>
                <Button onClick={() => {}}><Link to="/warenkorb">Warenkorb</Link></Button>
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/warenkorb" element={<Warenkorb cartItems={cart} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
