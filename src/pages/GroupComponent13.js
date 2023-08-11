import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Mattanza1Icon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 43.88rem;
  height: 22.44rem;
  object-fit: cover;
`;
const CarbonplayFilledAltIcon = styled.img`
  position: absolute;
  top: 8.07rem;
  left: 18.7rem;
  width: 6.11rem;
  height: 6.3rem;
  overflow: hidden;
`;
const animationFlipHorizontalBottom = keyframes`
    0% {
        transform: rotateX(0);
    }
    100% {
        transform: rotateX(-180deg);
    }
`;
const Mattanza1ParentRoot = styled.div`
  position: relative;
  width: 100%;
  height: 22.44rem;
  @media screen and (max-width: 1200px) {
    opacity: 1;
    &.animate {
      animation: 1s ease 0s 1 normal forwards ${animationFlipHorizontalBottom};
    }
  }
`;
const GroupComponent13 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <Mattanza1ParentRoot data-animate-on-scroll>
      <Mattanza1Icon alt="" src="/mattanza-1@2x.png" />
      <CarbonplayFilledAltIcon alt="" src="/carbonplayfilledalt.svg" />
    </Mattanza1ParentRoot>
  );
};

export default GroupComponent13;
