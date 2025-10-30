import { useEffect, useRef } from "react";
import gsap from "gsap";

const brands = [
  "https://framerusercontent.com/images/hSwT5bZsymf6RUhRvIEtNbSbEo.png?width=3000&height=1962",
  "https://framerusercontent.com/images/LuD6ZmkTnFD1B6thf3BADMXkfdE.png?width=3000&height=1962",
  "https://framerusercontent.com/images/Wrpx7jqyDzGYbiuov4cHcUHj4g.png?width=3000&height=1962",
  "https://framerusercontent.com/images/TVT3v1ul3h6FAtJlI3flGmdpYu4.png?width=3000&height=1962",
  "https://framerusercontent.com/images/InUuP3vJ6bwlMJD62dnM1zvVs4o.png?width=3000&height=1962",
];

const BrandCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const items = carousel.children;
    
    // Duplicate items for seamless loop
    Array.from(items).forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

    gsap.to(carousel, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-16 overflow-hidden bg-card/50">
      <div className="mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Brands</h2>
      </div>
      <div ref={carouselRef} className="flex gap-8 items-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-40 rounded-2xl overflow-hidden bg-background shadow-lg"
          >
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandCarousel;
