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

const SMALL_BUBBLE_2_LEFT_VALUE = -350;
const SMALL_BUBBLE_2_LEFT_OFFSET_VALUE = -300;
const SMALL_BUBBLE_2_TOP_VALUE = -700;
const SMALL_BUBBLE_2_TOP_OFFSET_VALUE = 300;

const SMALL_BUBBLE_4_LEFT_VALUE = -600;
const SMALL_BUBBLE_4_LEFT_OFFSET_VALUE = 150;
const SMALL_BUBBLE_4_TOP_VALUE = -550;
const SMALL_BUBBLE_4_TOP_OFFSET_VALUE = 0;

const SMALL_BUBBLE_3_LEFT_LEFT_VALUE = -350;
const SMALL_BUBBLE_3_LEFT_LEFT_OFFSET_VALUE = -300;
const SMALL_BUBBLE_3_LEFT_TOP_VALUE = -700;
const SMALL_BUBBLE_3_LEFT_TOP_OFFSET_VALUE = 300;

const BIG_BUBBLE_5_LEFT_LEFT_LEFT_VALUE = -350;
const BIG_BUBBLE_5_LEFT_LEFT_OFFSET_VALUE = -300;
const BIG_BUBBLE_5_LEFT_TOP_VALUE = -700;
const BIG_BUBBLE_5_LEFT_TOP_OFFSET_VALUE = 300;

const BIG_BUBBLE_2_LEFT_LEFT_VALUE = -350;
const BIG_BUBBLE_2_LEFT_LEFT_OFFSET_VALUE = -300;
const BIG_BUBBLE_2_LEFT_TOP_VALUE = -700;
const BIG_BUBBLE_2_LEFT_TOP_OFFSET_VALUE = 300;

const BACKGROUND_BUBBLE_2_LEFT_LEFT_VALUE = -350;
const BACKGROUND_BUBBLE_2_LEFT_LEFT_OFFSET_VALUE = -300;
const BACKGROUND_BUBBLE_2_LEFT_TOP_VALUE = -700;
const BACKGROUND_BUBBLE_2_LEFT_TOP_OFFSET_VALUE = 300;

const BIG_BUBBLE_1_LEFT_LEFT_VALUE = -350;
const BIG_BUBBLE_1_LEFT_LEFT_OFFSET_VALUE = -300;
const BIG_BUBBLE_1_LEFT_TOP_VALUE = -700;
const BIG_BUBBLE_1_LEFT_TOP_OFFSET_VALUE = 300;

const BIG_BUBBLE_2_RIGHT_LEFT_VALUE = -600;
const BIG_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE = 150;
const BIG_BUBBLE_2_RIGHT_TOP_VALUE = -550;
const BIG_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE = 0;

const SMALL_BUBBLE_2_RIGHT_LEFT_VALUE = -600;
const SMALL_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE = 150;
const SMALL_BUBBLE_2_RIGHT_TOP_VALUE = -550;
const SMALL_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE = 0;

const SMALL_BUBBLE_3_RIGHT_LEFT_VALUE = -600;
const SMALL_BUBBLE_3_RIGHT_LEFT_OFFSET_VALUE = 150;
const SMALL_BUBBLE_3_RIGHT_TOP_VALUE = -550;
const SMALL_BUBBLE_3_RIGHT_TOP_OFFSET_VALUE = 0;

const BIG_BUBBLE_4_RIGHT_LEFT_VALUE = -600;
const BIG_BUBBLE_4_RIGHT_LEFT_OFFSET_VALUE = 150;
const BIG_BUBBLE_4_RIGHT_TOP_VALUE = -550;
const BIG_BUBBLE_4_RIGHT_TOP_OFFSET_VALUE = 0;

const BACKGROUND_BUBBLE_2_RIGHT_LEFT_VALUE = -600;
const BACKGROUND_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE = 150;
const BACKGROUND_BUBBLE_2_RIGHT_TOP_VALUE = -550;
const BACKGROUND_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE = 0;

const BIG_BUBBLE_1_RIGHT_LEFT_VALUE = -600;
const BIG_BUBBLE_1_RIGHT_LEFT_OFFSET_VALUE = 150;
const BIG_BUBBLE_1_RIGHT_TOP_VALUE = -550;
const BIG_BUBBLE_1_RIGHT_TOP_OFFSET_VALUE = 0;

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
          url={"/img/bubble/bubbles_right_comingsoon.png"}
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
          speed_multiplicator={0.1}
          transform={"none"}
        />
      )}

      {size.height && (
        <Bubble
          url={"/img/bubble/bubbles_left_comingsoon.png"}
          width={50}
          height={50}
          x={BUBBLE_LEFT_LEFT_VALUE}
          initial_animation_offset_x={BUBBLE_LEFT_LEFT_OFFSET_VALUE}
          y={size.height + BUBBLE_LEFT_TOP_VALUE}
          initial_animation_offset_y={
            size.height + BUBBLE_LEFT_TOP_OFFSET_VALUE
          }
          speed_multiplicator={0.1}
          transform={"none"}
        />
      )}

      {size.height && size.width && (
        <Bubble
          url={"/img/bubble/bubbles_right_comingsoon.png"}
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
          speed_multiplicator={0.1}
          transform={"none"}
        />
      )}
    </Container>
  );
};

export default Home;
