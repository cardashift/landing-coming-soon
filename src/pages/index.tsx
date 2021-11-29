import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { CenterBlock } from '../components/elements/ComingSoon/CenterBlock'
import { TopRow } from '../components/elements/ComingSoon/TopRow'

interface ContainerBubbleProps {
  right?: string;
  left?: string;
  bottom: string;
  transform?: string;
}

const ContainerBubble = styled.div<ContainerBubbleProps>`
  position: absolute;
  bottom: ${props => props.bottom};
  transform: ${props => props.transform};
`
const ContainerBubbleRight = styled(ContainerBubble)`
  right: ${props => props.right};
`

const ContainerBubbleLeft = styled(ContainerBubble)`
  left: ${props => props.left};
`

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
`

const Home: NextPage = () => {
  return (
    <Container>
      <TopRow/>
      <CenterBlock/>
      <ContainerBubbleRight right={'-300px'} bottom={'-190px'} transform={'none'}>
        <Image src="/bubbles_right_comingsoon.png" width={871} height={692} />
      </ContainerBubbleRight>
      <ContainerBubbleLeft left={'-350px'} bottom={'-220px'} transform={'none'}>
        <Image src="/bubbles_left_comingsoon.png" width={914} height={900} />
      </ContainerBubbleLeft>
    </Container>
  )
}

export default Home
