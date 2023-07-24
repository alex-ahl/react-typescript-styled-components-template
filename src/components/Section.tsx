import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { device } from 'styles/breakpoints'

import { baseHeightStyles } from 'styles/styles'

interface SectionProps {
  left: ReactNode
  right: ReactNode
}

export const Section: FC<SectionProps> = ({ left, right }) => {
  return (
    <Container>
      <Content>{left}</Content>
      <Content>{right}</Content>
    </Container>
  )
}

const Container = styled.div`
  ${baseHeightStyles}

  display: flex;
  scroll-snap-align: start;

  @media only screen and (${device.xl}) {
    scroll-snap-align: initial;

    flex-direction: column;
    flex-wrap: wrap;

    &:nth-child(2n + 2) {
      flex-direction: column-reverse;
    }
  }
`

const Content = styled.div`
  flex-basis: 50%;
  flex-grow: 0;

  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media only screen and (${device.xl}) {
    min-height: inherit;
    scroll-snap-align: start;
  }
`
