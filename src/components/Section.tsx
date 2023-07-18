import { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { baseHeightStyles } from 'styles/styles'

interface SectionProps {
  contentLeft: ReactNode
  contentRight: ReactNode
}

const Section: FC<SectionProps> = ({ contentLeft, contentRight }) => {
  return (
    <Container>
      <Content>{contentLeft}</Content>
      <Content>{contentRight}</Content>
    </Container>
  )
}

const Container = styled.div`
  ${baseHeightStyles}

  display: flex;
  scroll-snap-align: start;
`

const Content = styled.div`
  flex-basis: 50%;
  flex-grow: 0;

  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export default Section
