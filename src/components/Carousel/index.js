import { useEffect, useRef, useState } from "react";

import CarouselItem from "./CarouselItem";
import CarouselIndicator from "./CarouselIndicator";

import {
  CarouselContainer,
  CarouselSlider,
  CarouselIndicatorContainer,
} from "./styled";

export default function Carousel({ items = [], dragSpeed = 2 }) {
  // States
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [indexActive, setIndexActive] = useState(0);

  // Refs
  const carouselSlider = useRef(null);
  const observer = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];

  // Intersection observer params
  const options = { root: null, rootMargin: "0px", threshold: 0.9 };

  const handler = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= options.threshold) {
        setIndexActive(entry.target.id);
      }
    });
  };

  // Mouse events
  const handleMouseDown = (evt) => {
    setIsDown(true);
    setStartX(evt.pageX - carouselSlider.current.offsetLeft);
    setScrollLeft(carouselSlider.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);

  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (evt) => {
    if (isDown) {
      evt.preventDefault();
      const x = evt.pageX - carouselSlider.current.offsetLeft;
      const walk = (x - startX) * dragSpeed;
      carouselSlider.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Add image ref to array ref (itemRef).
  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(handler, options);
    itemRefs.current.forEach((itemRef) => observer.current.observe(itemRef));

    return () => observer.current.disconnect();
  }, [handler, options]);

  return (
    <CarouselContainer>
      <CarouselSlider
        active={isDown}
        ref={carouselSlider}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {items.map(({ src }, index) => (
          <CarouselItem
            key={src}
            img={src}
            index={index}
            indexActive={indexActive}
            ref={addToRefs}
          />
        ))}
      </CarouselSlider>
      <CarouselIndicatorContainer>
        {items.map(({ src }, index) => (
          <CarouselIndicator
            key={src}
            index={index}
            indexActive={indexActive}
          />
        ))}
      </CarouselIndicatorContainer>
    </CarouselContainer>
  );
}
