import { useState } from "react";
import "./Gallery.scss";
import { Icon } from "../Icon/Icon";

export const Gallery = ({
  images,
}: {
  images: {
    type: string;
    author: string;
    title: string;
    size: string;
    image: string;
    prise: string;
  }[];
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
            <p>{image.prise}</p>
            {index === selectedImage ? (
              <Icon name="Heart" size={24} color="#ff0000" />
            ) : (
              <Icon name="Heart" size={24} color="#fff" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
