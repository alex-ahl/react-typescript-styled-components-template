import { FC } from 'react'
import styled from 'styled-components'
import { baseHeightStyles } from 'styles/styles'

import image from 'assets/images/cabin1_1920_2400.jpg'

const Section: FC = () => {
  return (
    <Container>
      <Left>
        <TextWrapper>
          <Headline>Text</Headline>
          <Text>Text1</Text>
        </TextWrapper>
      </Left>
      <Right>
        <img src={image} alt="image" />;
      </Right>
    </Container>
  )
}

const Container = styled.div`
  ${baseHeightStyles}

  border: 3px solid green;

  display: flex;
  flex-flow: row nowrap;
`

const Left = styled.div`
  border: 3px solid red;
  flex-grow: 1;

  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.medium};
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Headline = styled.h2``

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
`

const Right = styled.div`
  border: 3px solid blue;
  flex-grow: 1;
`

export default Section
