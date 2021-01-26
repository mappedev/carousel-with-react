import { Indicator } from "./styled";

export default function CarouselIndicator({ index, indexActive }) {
  return (
    <li>
      <Indicator active={index == indexActive} />
    </li>
  );
}
