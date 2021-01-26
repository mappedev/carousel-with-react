import styled from "styled-components";

export const CarouselContainer = styled.div`
  overflow: hidden;
  transition-property: transform;
`;

export const CarouselSlider = styled.ul`
  display: flex;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  --webkit-overflow-scrolling: touch;
  transition: 0.2s ease-in-out;
  transform: ${(props) => `scale(${props.active ? 1.02 : 1})`};
  list-style: none;
`;

export const Item = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 100vw;
  scroll-snap-align: center;
  transition: 0.5s ease-in-out;
  transform: ${(props) => `scale(${props.active ? 1.02 : 1})`};
`;

export const CarouselIndicatorContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const Indicator = styled.div`
  height: 12.5px;
  width: 12.5px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: relative;
  margin: -25px 10px 0 0;
  cursor: pointer;
  transition: 0.2s linear;
  background-color: #fff;
  transition-property: opacity, transform;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  transform: ${(props) => `scale(${props.active ? "1.25" : "1"})`};
  &::last-child {
    margin-right: 0;
  }
`;
