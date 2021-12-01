import Image from "next/image";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useWindowSize } from "../hooks/useWindowSize";

interface BubbleProps {
  maxWidth: number;
  maxHeight: number;
  url: string;
  x: number;
  y: number;
  initial_animation_offset_x: number;
  initial_animation_offset_y: number;
  width: number;
  height: number;
  transform: string;
  zIndex: number;
  speed_multiplicator: number;
  mass: number;
  disableAnimation?: boolean;
}

export const Bubble: React.FC<BubbleProps> = (props) => {
  const [mousePositionX, setMousePositionX] = useState<number>(0);
  const [mousePositionY, setMousePositionY] = useState<number>(0);
  const [isFirstAnimationDone, setFirstAnimationDone] = useState(false);
  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);
  const size = useWindowSize();

  const animation = useSpring(
    props.disableAnimation
      ? {
          from: {
            top: props.y,
            left: props.x,
          },
        }
      : {
          from: {
            top: props.y + props.initial_animation_offset_y,
            left: props.x + props.initial_animation_offset_x,
          },
          to: async (next, cancel) => {
            await next({ top: y, left: x });
          },
          config: {
            mass: isFirstAnimationDone ? props.mass : undefined,
          },
          onRest: () => setFirstAnimationDone(true),
        }
  );

  useEffect(() => {
    if (props.disableAnimation) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePositionX((state) => e.pageX);
      setMousePositionY((state) => e.pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [props.disableAnimation]);

  useEffect(() => {
    if (!size.width) {
      return;
    }
    setX(
      mousePositionX > size.width * 0.5
        ? mousePositionX * props.speed_multiplicator + props.x
        : props.x - mousePositionX * props.speed_multiplicator
    );
  }, [mousePositionX, props.x, props.speed_multiplicator, size]);

  useEffect(() => {
    if (!size.height) {
      return;
    }
    setY(
      mousePositionY > size.height * 0.5
        ? mousePositionY * props.speed_multiplicator + props.y
        : props.y - mousePositionY * props.speed_multiplicator
    );
  }, [mousePositionY, props.y, props.speed_multiplicator, size]);

  return (
    <animated.div
      style={{
        width: props.width,
        height: props.height,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth,
        position: "absolute",
        transform: props.transform,
        zIndex: props.zIndex,
        ...animation,
      }}
    >
      <img
        src={props.url}
        width={props.maxWidth}
        height={props.maxHeight}
        alt='Bubble'
      />
    </animated.div>
  );
};
