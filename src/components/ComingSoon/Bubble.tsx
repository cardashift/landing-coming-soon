import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";

interface BubbleProps {
  url: string;
  x: number;
  y: number;
  initial_animation_offset_x: number;
  initial_animation_offset_y: number;
  width: number;
  height: number;
}

export const Bubble: React.FC<BubbleProps> = (props) => {
  const animation = useSpring({
    from: {
      top: props.y + props.initial_animation_offset_y,
      left: props.x + props.initial_animation_offset_x,
    },
    to: async (next, cancel) => {
      await next({ top: y, left: x });
    },
  });

  const [mousePositionX, setMousePositionX] = useState<number>(0);
  const [mousePositionY, setMousePositionY] = useState<number>(0);
  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePositionX(e.pageX);
      setMousePositionY(e.pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setX(mousePositionX * 0.1 + props.x);
  }, [mousePositionX, props.x]);

  useEffect(() => {
    setY(mousePositionY * 0.1 + props.y);
  }, [mousePositionY, props.y]);

  return (
    <animated.div
      style={{
        width: props.width,
        height: props.height,
        position: "absolute",
        ...animation,
      }}
    >
      <Image
        src={props.url}
        width={props.width}
        height={props.height}
        alt="Bubble"
      />
    </animated.div>
  );
};
