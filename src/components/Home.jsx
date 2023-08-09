import { useState, useEffect } from "react";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "src/assets/images/home/earth.gif",
    "src/assets/images/home/warning.png",
    "src/assets/images/home/badEarth.gif",
    "src/assets/images/home/loading.png",
    "src/assets/images/home/success.jpg",
  ];

  const imageDisplayTimes = [13000, 200, 2000, 700, 300];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, imageDisplayTimes[currentImage]);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, currentImage]);

  return (
    <div className="homeMain">
      <img className="homeImg" src={images[currentImage]} alt="Carousel" />
    </div>
  );
};

export default Home;
