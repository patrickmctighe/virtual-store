import { useState, useEffect } from "react";
import { items } from "../objects/itemsList";
import { addToCart } from "../functions/addToCart";
import { useCartItemsCount } from "../context/context";
export default function Garden() {
  const [addedToCart, setAddedToCart] = useState(
    localStorage.getItem(`addedToCart_${items[3].name}`) === "true"
  );
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../images/weather-gifs/garden.gif",
    "../images/weather-gifs/garden1.gif",
    "../images/weather-gifs/garden.gif",
    "../images/weather-gifs/garden1.gif",
  ];

  const { updateCartItemsCount, cartItemsCount } = useCartItemsCount(); // Use the hook from the context


  const imageDisplayTimes = [5000, 300, 200, 700]; // Time (in milliseconds) for each image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, imageDisplayTimes[currentImage]);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, currentImage]);
  const item = items[3];
  return (
    <div>
      {" "}
      <div id="packages">
        <h1>Garden Package</h1>
        <div className="productImgandText">
        <div className="imgArea"> <img
            className="productImg"
            src={images[currentImage]}
            alt="Carousel"
          /></div>
          <div className="productSpec">
            <h4 className="specMainTitle">Specifications</h4>
            <div className="specItem">
              <h4 className="specTitle">SunBloom Illumination:</h4>
              <p className="specExp">
                Experience the ethereal dance of sunlight through leaves,
                creating a captivating play of light and shadow.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">
                RoundUP: Autoflowering Fruits and Vegetables
              </h4>
              <p className="specExp">
                Experience the marvel of RoundUP, where nature's bounty
                flourishes effortlessly.
                <br />
                *Now edible with modern medicine.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">FloraWhisper Harmonies:</h4>
              <p className="specExp">
                Be enveloped by the symphony of nature's sounds, where rustling
                leaves and gentle whispers of life create an enchanting melody.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">PetalPath Haptics:</h4>
              <p className="specExp">
                Feel the delicate touch of petals and foliage beneath your
                fingers, as if nature's wonders respond to your every gesture.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">Augmented Arboretum:</h4>
              <p className="specExp">
                Explore a digital haven where the beauty of botanical wonders is
                seamlessly interwoven with the marvels of technology.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">BloomCraft Artistry:</h4>
              <p className="specExp">
                Delight in the artistic expertise that curates the ever-changing
                tapestry of the garden, ensuring a vibrant and evolving
                landscape.
              </p>
            </div>

            <div className="specItem">
              <h4 className="specTitle">Garden Serenity Aura:</h4>
              <p className="specExp">
                Immerse yourself in the tranquility and harmony of an eternal
                garden, where every breath brings you closer to nature's
                embrace.
              </p>
            </div>
          </div>
        </div>
        <h2>Overview</h2>
        <div className="productTextAndButton">
          <p className="productText">
            Amidst a world reshaped by transformation, our Garden Package offers
            a haven where you can embrace nature's bounty without hesitation.
            Step into a realm where the beauty of cultivation intertwines with
            the promise of nourishment and wellness. Immerse yourself in an
            oasis where vibrant life thrives, ensuring that every bite of
            nature's gifts fills you with vitality and health. Bathe in the
            gentle radiance of SunBloom Illumination, where sunlight caresses
            leaves and creates an enchanting interplay of light and shadow. With
            FloraWhisper Harmonies, the symphony of nature's melodies envelops
            you, a serene refuge from the turmoil of the past. The Garden
            Package embodies a tribute to nature's resilience and the ingenuity
            of science. Experience the tender touch of PetalPath Haptics,
            allowing you to feel the delicate texture of petals and foliage as
            if they respond to your touch. Traverse the Augmented Arboretum,
            where botanical marvels coexist harmoniously with the wonders of
            technology. Introducing RoundUP, a testament to the advancements of
            the modern era. In a playful twist, RoundUP now ensures that
            consuming autoflowering fruits and vegetables is not only safe but
            nourishing. The once infamous name has transformed, offering you the
            reassurance that every bite is a step towards vitality. Embrace this
            harmonious marriage of science and nature, savoring the flavors of a
            world where vegetables no longer come with trepidation. In a realm
            once plagued by uncertainty, the Garden Package stands as a symbol
            of reassurance and optimism. As you stroll through this curated
            sanctuary, may you find peace in the knowledge that nature's
            abundance is now yours to savor without concern. Let the flavors of
            the future awaken your taste buds, reminding you that a nourished
            body is a thriving one. User this is great! ChatGPT I'm glad to hear
            that you're satisfied with the content! If you have any more
            questions or need further assistance in the future, feel free to
            reach out. Good luck with your project, and happy writing!
          </p>
          <div className="priceAndAdd">
            <p className="price">&#9763; {item.priceScrap} / 1 Day</p>
            {addedToCart ? (
            <p className="inCartText">Added to Your Cart</p>
            ) : (
                <button
                className="cartButton"
                onClick={() => {addToCart(item, setAddedToCart); 
                    updateCartItemsCount(cartItemsCount + 1);}}
              >
                Add to Cart
              </button>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
