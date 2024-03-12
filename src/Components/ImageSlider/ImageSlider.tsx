import {useState} from "react";
import "./ImageSlider.scss";

export const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handelPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handelNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="ImageSlider ">
      <button onClick={handelPrev}>&lt;</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button onClick={handelNext}>&gt;</button>
    </div>
  );
};
