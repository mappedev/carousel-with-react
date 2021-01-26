import { forwardRef } from "react";

import { Item } from "./styled";

const CarouselItem = forwardRef(({ img, index, indexActive }, ref) => (
  <li id={index} ref={ref}>
    <Item img={img} active={index == indexActive} />
  </li>
));

export default CarouselItem;
