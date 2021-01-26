import Carousel from "./components/Carousel";

import "./assets/css/normalize.css";
import slider1 from "./assets/img/slider1.jpg";
import slider2 from "./assets/img/slider2.jpg";
import slider3 from "./assets/img/slider3.jpg";

export default function App() {
  const items = [
    { src: slider1, alt: "Slider 1" },
    { src: slider2, alt: "Slider 2" },
    { src: slider3, alt: "Slider 3" },
  ];

  return <Carousel items={items} />;
}
