import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { CenterBlock } from "../components/elements/ComingSoon/CenterBlock";
import { TopRow } from "../components/elements/ComingSoon/TopRow";
import { keyframes } from "styled-components";
import {MouseEvent, useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

interface ParallaxAnimationProps {
  bottom: number;
  bottom_offset: number;
}

interface ParallaxAnimationRightProps extends ParallaxAnimationProps {
  right: number;
  right_offset: number;
}

interface ParallaxAnimationLeftProps extends ParallaxAnimationProps {
  left: number;
  left_offset: number;
}

const BUBBLE_LEFT_LEFT_VALUE = -350;
const BUBBLE_LEFT_LEFT_OFFSET_VALUE = 150;
const BUBBLE_LEFT_BOTTOM_VALUE = -200;
const BUBBLE_LEFT_BOTTOM_OFFSET_VALUE = 300;

const BUBBLE_RIGHT_RIGHT_VALUE = -300;
const BUBBLE_RIGHT_RIGHT_OFFSET_VALUE = 200;
const BUBBLE_RIGHT_BOTTOM_VALUE = -200;
const BUBBLE_RIGHT_BOTTOM_OFFSET_VALUE = 300;

const parallaxAnimationLeft = (props: ParallaxAnimationLeftProps) => keyframes`
  from {
    bottom : ${props.bottom - props.bottom_offset}px;
    left : ${props.left - props.left_offset}px;
  }

  to {
    bottom : ${props.bottom}px;
    left : ${props.left}px;
  }
`;

const parallaxAnimationRight = (
  props: ParallaxAnimationRightProps
) => keyframes`
  from {
    bottom : ${props.bottom - props.bottom_offset}px;
    right : ${props.right - props.right_offset}px;
  }

  to {
    bottom : ${props.bottom}px;
    right : ${props.right}px;
  }
`;

const ContainerBubbleRight = styled.div<ParallaxAnimationRightProps>`
  position: absolute;
  animation-duration: 1s;
  animation-iteration-count: 1;
  right: ${(props) => props.right}px;
  animation-name: ${(props) => parallaxAnimationRight(props)};
  bottom: ${(props) => props.bottom}px;
  transition: 1s;
`;

const ContainerBubbleLeft = styled.div<ParallaxAnimationLeftProps>`
  position: absolute;
  animation-duration: 1s;
  animation-iteration-count: 1;
  left: ${(props) => props.left}px;
  animation-name: ${(props) => parallaxAnimationLeft(props)};
  bottom: ${(props) => props.bottom}px;
  transition: 1s;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Home: NextPage = () => {

  const [mousePositionX, setMousePositionX] = useState<number>(0);
  const [mousePositionY, setMousePositionY] = useState<number>(0);
  const [bubbleLeftPositionX, setBubbleLeftPositionX] = useState<number>();
  const [bubbleRightPositionX, setBubbleRightPositionX] = useState<number>();
  const [bubbleLeftPositionY, setBubbleLeftPositionY] = useState<number>();
  const [bubbleRightPositionY, setBubbleRightPositionY] = useState<number>();

  const size = useWindowSize();

  const handleMouseEvent = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMousePositionX(e.clientX)
    setMousePositionY(e.clientY)
    // Do something
  };


  // useEffect(() => {

  //   const handleMouseMove = (e : MouseEvent) => {
  //     setMousePositionX(e.pageX)
  //     setMousePositionY(e.pageY)
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  return (
    <Container onMouseMove={handleMouseEvent}>
      <TopRow />
      <CenterBlock />
      <ContainerBubbleLeft
        bottom={BUBBLE_LEFT_BOTTOM_VALUE}
        left={BUBBLE_LEFT_LEFT_VALUE}
        bottom_offset={BUBBLE_LEFT_BOTTOM_OFFSET_VALUE}
        left_offset={BUBBLE_LEFT_LEFT_OFFSET_VALUE}
      >
        <Image
          src="/bubbles_left_comingsoon.png"
          width={914}
          height={900}
          alt="Background bubble image left"
        />
      </ContainerBubbleLeft>
      <ContainerBubbleRight
        bottom={BUBBLE_RIGHT_BOTTOM_VALUE}
        right={BUBBLE_RIGHT_RIGHT_VALUE}
        bottom_offset={BUBBLE_RIGHT_BOTTOM_OFFSET_VALUE}
        right_offset={BUBBLE_RIGHT_RIGHT_OFFSET_VALUE}
      >
        <Image
          src="/bubbles_right_comingsoon.png"
          width={871}
          height={692}
          alt="Background bubble image right"
        />
      </ContainerBubbleRight>
    </Container>
  );
};

export default Home;
