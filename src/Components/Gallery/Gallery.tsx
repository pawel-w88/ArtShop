// Gallery.js
import { useState } from "react";
import "./Gallery.scss";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

export const Gallery = ({
  images,
  addItem,
}: {
  images: {
    type: string;
    author: string;
    title: string;
    size: string;
    image: string;
    price: string; // Fixed typo in price
  }[];
  addItem: (id: number, name: string, price: number) => void; // Function to add item to cart
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number): void => {
    setSelectedImage(index);
  };

  return (
    <div className="Gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-container ${
            index === selectedImage ? "selected" : ""
          }`}
          onClick={() => handleImageClick(index)}
        >
          <img src={image.image} alt={`Image ${index + 1}`} />
          <div className="details">
            <p>{image.type}</p>
            <p>{image.author}</p>
            <p>{image.title}</p>
            <p>{image.size}</p>
            <p>{image.price}</p>
            <div className="btn-icon">
              {index === selectedImage ? (
                <Icon name="Heart" size={24} color="#ff0000" />
              ) : (
                <Icon name="Heart" size={24} color="#fff" />
              )}
              <Button
                onClick={() =>
                  addItem(index, image.title, parseInt(image.price))
                }
              >
                In den Warenkorb
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
