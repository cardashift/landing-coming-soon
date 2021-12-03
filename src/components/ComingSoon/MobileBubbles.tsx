import styled from 'styled-components';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Bubble } from '../Bubble';

const BACKGROUND_BUBBLE_1_LEFT_VALUE = -200;
const BACKGROUND_BUBBLE_1_LEFT_OFFSET_VALUE = 0;
const BACKGROUND_BUBBLE_1_TOP_VALUE = -130;
const BACKGROUND_BUBBLE_1_TOP_OFFSET_VALUE = 0;

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
          url={'/bubbles/background_bubble_1.svg'}
          disableAnimation={true}
          width={401}
          height={450}
          maxHeight={401}
          maxWidth={450}
          x={size.width / 2 + BACKGROUND_BUBBLE_1_LEFT_VALUE}
          initial_animation_offset_x={BACKGROUND_BUBBLE_1_LEFT_OFFSET_VALUE}
          y={BACKGROUND_BUBBLE_1_TOP_VALUE}
          initial_animation_offset_y={BACKGROUND_BUBBLE_1_TOP_OFFSET_VALUE}
          speed_multiplicator={0.05}
          transform={'scaleX(-1)'}
          zIndex={-6}
          mass={10}
        />
      )}
    </BubblesWrapper>
  );
};

export default MobileBubbles;
