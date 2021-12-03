import styled from 'styled-components';
import { useWindowSize } from '@/cardashift/hooks/useWindowSize';
import { Bubble } from '@/cardashift/components/Bubble';
import { useEffect, useState } from 'react';

const BubblesWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const SMALL_BUBBLE_2_LEFT_LEFT_VALUE = 144;
const SMALL_BUBBLE_2_LEFT_LEFT_OFFSET_VALUE = -50;
const SMALL_BUBBLE_2_LEFT_TOP_VALUE = -220;
const SMALL_BUBBLE_2_LEFT_TOP_OFFSET_VALUE = 50;

const SMALL_BUBBLE_4_LEFT_LEFT_VALUE = 75;
const SMALL_BUBBLE_4_LEFT_LEFT_OFFSET_VALUE = -50;
const SMALL_BUBBLE_4_LEFT_TOP_VALUE = -650;
const SMALL_BUBBLE_4_LEFT_TOP_OFFSET_VALUE = 50;

const SMALL_BUBBLE_3_LEFT_LEFT_VALUE = 341;
const SMALL_BUBBLE_3_LEFT_LEFT_OFFSET_VALUE = -50;
const SMALL_BUBBLE_3_LEFT_TOP_VALUE = -300;
const SMALL_BUBBLE_3_LEFT_TOP_OFFSET_VALUE = 50;

const BIG_BUBBLE_2_LEFT_LEFT_VALUE = 168;
const BIG_BUBBLE_2_LEFT_LEFT_OFFSET_VALUE = -50;
const BIG_BUBBLE_2_LEFT_TOP_VALUE = -550;
const BIG_BUBBLE_2_LEFT_TOP_OFFSET_VALUE = 50;

const BIG_BUBBLE_5_LEFT_LEFT_VALUE = -50;
const BIG_BUBBLE_5_LEFT_LEFT_OFFSET_VALUE = -50;
const BIG_BUBBLE_5_LEFT_TOP_VALUE = -600;
const BIG_BUBBLE_5_LEFT_TOP_OFFSET_VALUE = 50;

const BACKGROUND_BUBBLE_2_LEFT_LEFT_VALUE = -330;
const BACKGROUND_BUBBLE_2_LEFT_LEFT_OFFSET_VALUE = -50;
const BACKGROUND_BUBBLE_2_LEFT_TOP_VALUE = -550;
const BACKGROUND_BUBBLE_2_LEFT_TOP_OFFSET_VALUE = 50;

const BIG_BUBBLE_1_LEFT_LEFT_VALUE = 55;
const BIG_BUBBLE_1_LEFT_LEFT_OFFSET_VALUE = -50;
const BIG_BUBBLE_1_LEFT_TOP_VALUE = -350;
const BIG_BUBBLE_1_LEFT_TOP_OFFSET_VALUE = 50;

const BIG_BUBBLE_2_RIGHT_LEFT_VALUE = -50;
const BIG_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE = 50;
const BIG_BUBBLE_2_RIGHT_TOP_VALUE = -500;
const BIG_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE = 50;

const SMALL_BUBBLE_2_RIGHT_LEFT_VALUE = -280;
const SMALL_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE = 50;
const SMALL_BUBBLE_2_RIGHT_TOP_VALUE = -200;
const SMALL_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE = 50;

const SMALL_BUBBLE_3_RIGHT_LEFT_VALUE = -350;
const SMALL_BUBBLE_3_RIGHT_LEFT_OFFSET_VALUE = 50;
const SMALL_BUBBLE_3_RIGHT_TOP_VALUE = -430;
const SMALL_BUBBLE_3_RIGHT_TOP_OFFSET_VALUE = 50;

const BIG_BUBBLE_4_RIGHT_LEFT_VALUE = -600;
const BIG_BUBBLE_4_RIGHT_LEFT_OFFSET_VALUE = 50;
const BIG_BUBBLE_4_RIGHT_TOP_VALUE = -110;
const BIG_BUBBLE_4_RIGHT_TOP_OFFSET_VALUE = 50;

const BACKGROUND_BUBBLE_2_RIGHT_LEFT_VALUE = -500;
const BACKGROUND_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE = 50;
const BACKGROUND_BUBBLE_2_RIGHT_TOP_VALUE = -450;
const BACKGROUND_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE = 50;

const BIG_BUBBLE_1_RIGHT_LEFT_VALUE = -135;
const BIG_BUBBLE_1_RIGHT_LEFT_OFFSET_VALUE = 50;
const BIG_BUBBLE_1_RIGHT_TOP_VALUE = -250;
const BIG_BUBBLE_1_RIGHT_TOP_OFFSET_VALUE = 50;

const DesktopBubbles: React.FC = () => {
  const size = useWindowSize();
  const DEFAULT_SCREEN_SIZE = 1920;
  const [screenCoeff, setScreenCoeff] = useState<number>(1);

  useEffect(() => {
    if (size.width && size.width / DEFAULT_SCREEN_SIZE < 0.7) {
      setScreenCoeff(size.width / DEFAULT_SCREEN_SIZE);
    } else {
      setScreenCoeff(1);
    }
  }, [size]);

  return (
    <BubblesWrapper>
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/small_bubble_2.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={78}
          maxWidth={78}
          x={SMALL_BUBBLE_2_LEFT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={SMALL_BUBBLE_2_LEFT_LEFT_OFFSET_VALUE}
          y={size.height + SMALL_BUBBLE_2_LEFT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={SMALL_BUBBLE_2_LEFT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.07}
          transform={'rotate(-90deg)'}
          zIndex={-4}
          mass={5}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/small_bubble_4.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={69}
          maxWidth={71.57}
          x={SMALL_BUBBLE_4_LEFT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={SMALL_BUBBLE_4_LEFT_LEFT_OFFSET_VALUE}
          y={size.height + SMALL_BUBBLE_4_LEFT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={SMALL_BUBBLE_4_LEFT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.07}
          transform={'rotate(-90deg)'}
          zIndex={-4}
          mass={5}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/small_bubble_3.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={69}
          maxWidth={71.57}
          x={SMALL_BUBBLE_3_LEFT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={SMALL_BUBBLE_3_LEFT_LEFT_OFFSET_VALUE}
          y={size.height + SMALL_BUBBLE_3_LEFT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={SMALL_BUBBLE_3_LEFT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.07}
          transform={'rotate(-90deg)'}
          zIndex={-4}
          mass={5}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/big_bubble_2.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={98.5}
          maxWidth={99}
          x={BIG_BUBBLE_2_LEFT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={BIG_BUBBLE_2_LEFT_LEFT_OFFSET_VALUE}
          y={size.height + BIG_BUBBLE_2_LEFT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={BIG_BUBBLE_2_LEFT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={'rotate(-90deg)'}
          zIndex={-3}
          mass={10}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/big_bubble_5.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={119}
          maxWidth={119}
          x={BIG_BUBBLE_5_LEFT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={BIG_BUBBLE_5_LEFT_LEFT_OFFSET_VALUE}
          y={size.height + BIG_BUBBLE_5_LEFT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={BIG_BUBBLE_5_LEFT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={'rotate(-130deg)'}
          zIndex={-4}
          mass={10}
        />
      )}

      {size.height && size.width && (
        <Bubble
          url={'/bubbles/background_bubble_2.svg'}
          width={size.width * screenCoeff * 2}
          height={size.height * screenCoeff * 2}
          maxHeight={657}
          maxWidth={777}
          x={
            screenCoeff < 1
              ? BACKGROUND_BUBBLE_2_LEFT_LEFT_VALUE * screenCoeff * 1.3
              : BACKGROUND_BUBBLE_2_LEFT_LEFT_VALUE
          }
          initial_animation_offset_x={
            BACKGROUND_BUBBLE_2_LEFT_LEFT_OFFSET_VALUE
          }
          y={
            screenCoeff < 1
              ? size.height +
                BACKGROUND_BUBBLE_2_LEFT_TOP_VALUE * screenCoeff * 1.3
              : size.height + BACKGROUND_BUBBLE_2_LEFT_TOP_VALUE
          }
          initial_animation_offset_y={BACKGROUND_BUBBLE_2_LEFT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.02}
          transform={'rotate(-135deg)'}
          zIndex={-5}
          mass={20}
        />
      )}

      {size.height && size.width && (
        <Bubble
          url={'/bubbles/big_bubble_1.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={95}
          maxWidth={99}
          x={BIG_BUBBLE_1_LEFT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={BIG_BUBBLE_1_LEFT_LEFT_OFFSET_VALUE}
          y={size.height + BIG_BUBBLE_1_LEFT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={BIG_BUBBLE_1_LEFT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={'rotate(-90deg)'}
          zIndex={-6}
          mass={10}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/big_bubble_2.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={99}
          maxWidth={99}
          x={size.width + BIG_BUBBLE_2_RIGHT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={BIG_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE}
          y={size.height + BIG_BUBBLE_2_RIGHT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={BIG_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={'matrix(1, 0, 0, -1, 0, 0)'}
          zIndex={-4}
          mass={10}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/small_bubble_2.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={78}
          maxWidth={78}
          x={size.width + SMALL_BUBBLE_2_RIGHT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={SMALL_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE}
          y={size.height + SMALL_BUBBLE_2_RIGHT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={SMALL_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.07}
          transform={'matrix(1, 0, 0, -1, 0, 0)'}
          zIndex={-4}
          mass={5}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/background_bubble_2.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={657}
          maxWidth={777}
          x={
            screenCoeff < 1
              ? size.width +
                BACKGROUND_BUBBLE_2_RIGHT_LEFT_VALUE * screenCoeff * 1.3
              : size.width + BACKGROUND_BUBBLE_2_RIGHT_LEFT_VALUE
          }
          initial_animation_offset_x={
            BACKGROUND_BUBBLE_2_RIGHT_LEFT_OFFSET_VALUE
          }
          y={
            screenCoeff < 1
              ? size.height +
                BACKGROUND_BUBBLE_2_RIGHT_TOP_VALUE * screenCoeff * 0.5
              : size.height + BACKGROUND_BUBBLE_2_RIGHT_TOP_VALUE
          }
          initial_animation_offset_y={
            BACKGROUND_BUBBLE_2_RIGHT_TOP_OFFSET_VALUE
          }
          speed_multiplicator={0.02}
          transform={'matrix(1, 0, 0, -1, 0, 0)'}
          zIndex={-5}
          mass={20}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/small_bubble_3.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={69}
          maxWidth={71.57}
          x={size.width + SMALL_BUBBLE_3_RIGHT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={SMALL_BUBBLE_3_RIGHT_LEFT_OFFSET_VALUE}
          y={size.height + SMALL_BUBBLE_3_RIGHT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={SMALL_BUBBLE_3_RIGHT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.07}
          transform={'matrix(1, 0, 0, -1, 0, 0)'}
          zIndex={-4}
          mass={5}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/big_bubble_4.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={98}
          maxWidth={98}
          x={size.width + BIG_BUBBLE_4_RIGHT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={BIG_BUBBLE_4_RIGHT_LEFT_OFFSET_VALUE}
          y={size.height + BIG_BUBBLE_4_RIGHT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={BIG_BUBBLE_4_RIGHT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={'matrix(1, 0, 0, -1, 0, 0)'}
          zIndex={-3}
          mass={10}
        />
      )}
      {size.height && size.width && (
        <Bubble
          url={'/bubbles/big_bubble_1.svg'}
          width={size.width * screenCoeff}
          height={size.height * screenCoeff}
          maxHeight={95}
          maxWidth={99}
          x={size.width + BIG_BUBBLE_1_RIGHT_LEFT_VALUE * screenCoeff}
          initial_animation_offset_x={BIG_BUBBLE_1_RIGHT_LEFT_OFFSET_VALUE}
          y={size.height + BIG_BUBBLE_1_RIGHT_TOP_VALUE * screenCoeff}
          initial_animation_offset_y={BIG_BUBBLE_1_RIGHT_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={'matrix(1, 0, 0, -1, 0, 0)'}
          zIndex={-6}
          mass={10}
        />
      )}
    </BubblesWrapper>
  );
};

export default DesktopBubbles;
