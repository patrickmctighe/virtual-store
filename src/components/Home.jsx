import { useState, useEffect } from "react";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "src/assets/images/home/earth1.gif",
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
        <div className="bannerArea"><p className="homeBanner">Don't Let The Climate Change You Try</p>
        <p className="homeBanner1">Climate Change-a-roo</p> </div>
          <img className="homeImg" src={images[currentImage]} alt="Carousel" />
    
        <p className="gandhi">"Order The Change You Want To Be Subjected Too" - Robot Gandhi</p>
      
   </div>
  );
};

export default Home;
