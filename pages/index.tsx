import type { NextPage } from "next";
import styled from "styled-components";
import { Bubble } from "../src/components/ComingSoon/Bubble";
import { CenterBlock } from "../src/components/ComingSoon/CenterBlock";
import { TopRow } from "../src/components/ComingSoon/TopRow";
import { useWindowSize } from "../src/hooks/useWindowSize";

const BUBBLE_LEFT_LEFT_VALUE = -350;
const BUBBLE_LEFT_LEFT_OFFSET_VALUE = -300;
const BUBBLE_LEFT_TOP_VALUE = -700;
const BUBBLE_LEFT_TOP_OFFSET_VALUE = 300;

const BUBBLE_RIGHT_LEFT_VALUE = -600;
const BUBBLE_RIGHT_LEFT_OFFSET_VALUE = 150;
const BUBBLE_RIGHT_TOP_VALUE = -550;
const BUBBLE_RIGHT_TOP_OFFSET_VALUE = 0;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Home: NextPage = () => {
  const size = useWindowSize();

  return (
    <Container>
      <TopRow />
      <CenterBlock />

      {size.height && size.width && (
        <Bubble
          url={"/bubbles_right_comingsoon.png"}
          width={871}
          height={692}
          x={size.width + BUBBLE_RIGHT_LEFT_VALUE}
          initial_animation_offset_x={
            size.width + BUBBLE_RIGHT_LEFT_OFFSET_VALUE
          }
          y={size.height + BUBBLE_RIGHT_TOP_VALUE}
          initial_animation_offset_y={
            size.height + BUBBLE_RIGHT_TOP_OFFSET_VALUE
          }
        />
      )}

      {size.height && (
        <Bubble
          url={"/bubbles_left_comingsoon.png"}
          width={914}
          height={900}
          x={BUBBLE_LEFT_LEFT_VALUE}
          initial_animation_offset_x={BUBBLE_LEFT_LEFT_OFFSET_VALUE}
          y={size.height + BUBBLE_LEFT_TOP_VALUE}
          initial_animation_offset_y={
            size.height + BUBBLE_LEFT_TOP_OFFSET_VALUE
          }
        />
      )}
    </Container>
  );
};

export default Home;
