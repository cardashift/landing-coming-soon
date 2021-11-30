import styled from "styled-components";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Bubble } from "../Bubble";

const SMALL_BUBBLE_2_LEFT_VALUE = 20;
const SMALL_BUBBLE_2_LEFT_OFFSET_VALUE = 0;
const SMALL_BUBBLE_2_TOP_VALUE = 110;
const SMALL_BUBBLE_2_TOP_OFFSET_VALUE = -50;

const BACKGROUND_BUBBLE_2_LEFT_VALUE = -270;
const BACKGROUND_BUBBLE_2_LEFT_OFFSET_VALUE = 0;
const BACKGROUND_BUBBLE_2_TOP_VALUE = -90;
const BACKGROUND_BUBBLE_2_TOP_OFFSET_VALUE = -50;

const BIG_BUBBLE_2_LEFT_VALUE = -80;
const BIG_BUBBLE_2_LEFT_OFFSET_VALUE = 0;
const BIG_BUBBLE_2_TOP_VALUE = 240;
const BIG_BUBBLE_2_TOP_OFFSET_VALUE = -50;

const SMALL_BUBBLE_3_LEFT_VALUE = 50;
const SMALL_BUBBLE_3_LEFT_OFFSET_VALUE = 0;
const SMALL_BUBBLE_3_TOP_VALUE = 220;
const SMALL_BUBBLE_3_TOP_OFFSET_VALUE = -50;

const BIG_BUBBLE_4_LEFT_VALUE = 170;
const BIG_BUBBLE_4_LEFT_OFFSET_VALUE = 0;
const BIG_BUBBLE_4_TOP_VALUE = 40;
const BIG_BUBBLE_4_TOP_OFFSET_VALUE = -50;

const BIG_BUBBLE_1_LEFT_VALUE = -70;
const BIG_BUBBLE_1_LEFT_OFFSET_VALUE = 0;
const BIG_BUBBLE_1_TOP_VALUE = 120;
const BIG_BUBBLE_1_TOP_OFFSET_VALUE = -50;

const BubblesWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileBubbles: React.FC = () => {
  const size = useWindowSize();

  return (
    <BubblesWrapper>
      {size.height && size.width && (
        <Bubble
          url={"/img/bubble/small_bubble_2.svg"}
          width={size.width}
          height={size.height}
          maxHeight={45}
          maxWidth={45}
          x={size.width / 2 + SMALL_BUBBLE_2_LEFT_VALUE}
          initial_animation_offset_x={SMALL_BUBBLE_2_LEFT_OFFSET_VALUE}
          y={SMALL_BUBBLE_2_TOP_VALUE}
          initial_animation_offset_y={SMALL_BUBBLE_2_TOP_OFFSET_VALUE}
          speed_multiplicator={0.07}
          transform={"none"}
          zIndex={-4}
          mass={5}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={"/img/bubble/background_bubble_2.svg"}
          width={443}
          height={376}
          maxHeight={376}
          maxWidth={443}
          x={size.width / 2 + BACKGROUND_BUBBLE_2_LEFT_VALUE}
          initial_animation_offset_x={BACKGROUND_BUBBLE_2_LEFT_OFFSET_VALUE}
          y={BACKGROUND_BUBBLE_2_TOP_VALUE}
          initial_animation_offset_y={BACKGROUND_BUBBLE_2_TOP_OFFSET_VALUE}
          speed_multiplicator={0.02}
          transform={"scaleX(-1)"}
          zIndex={-5}
          mass={20}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={"/img/bubble/big_bubble_2.svg"}
          width={size.width}
          height={size.height}
          maxHeight={56}
          maxWidth={55}
          x={size.width / 2 + BIG_BUBBLE_2_LEFT_VALUE}
          initial_animation_offset_x={BIG_BUBBLE_2_LEFT_OFFSET_VALUE}
          y={BIG_BUBBLE_2_TOP_VALUE}
          initial_animation_offset_y={BIG_BUBBLE_2_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={"none"}
          zIndex={-4}
          mass={10}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={"/img/bubble/small_bubble_3.svg"}
          width={size.width}
          height={size.height}
          maxHeight={40}
          maxWidth={40}
          x={size.width / 2 + SMALL_BUBBLE_3_LEFT_VALUE}
          initial_animation_offset_x={SMALL_BUBBLE_3_LEFT_OFFSET_VALUE}
          y={SMALL_BUBBLE_3_TOP_VALUE}
          initial_animation_offset_y={SMALL_BUBBLE_3_TOP_OFFSET_VALUE}
          speed_multiplicator={0.07}
          transform={"none"}
          zIndex={-4}
          mass={5}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={"/img/bubble/big_bubble_4.svg"}
          width={size.width}
          height={size.height}
          maxHeight={56}
          maxWidth={55}
          x={size.width / 2 + BIG_BUBBLE_4_LEFT_VALUE}
          initial_animation_offset_x={BIG_BUBBLE_4_LEFT_OFFSET_VALUE}
          y={BIG_BUBBLE_4_TOP_VALUE}
          initial_animation_offset_y={BIG_BUBBLE_4_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={"none"}
          zIndex={-4}
          mass={10}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={"/img/bubble/big_bubble_1.svg"}
          width={size.width}
          height={size.height}
          maxHeight={56}
          maxWidth={55}
          x={size.width / 2 + BIG_BUBBLE_1_LEFT_VALUE}
          initial_animation_offset_x={BIG_BUBBLE_1_LEFT_OFFSET_VALUE}
          y={BIG_BUBBLE_1_TOP_VALUE}
          initial_animation_offset_y={BIG_BUBBLE_1_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={"none"}
          zIndex={-6}
          mass={10}
        />
      )}
    </BubblesWrapper>
  );
};

export default MobileBubbles;
