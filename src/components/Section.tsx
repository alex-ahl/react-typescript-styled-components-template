import { Dispatch, FC, HTMLProps, ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

import { device } from 'styles/breakpoints'
import { baseHeightStyles } from 'styles/styles'

interface SectionProps extends HTMLProps<HTMLDivElement> {
  setIntersectingSectionId: Dispatch<string | undefined>
  left: ReactNode
  right: ReactNode
}

export const Section: FC<SectionProps> = ({ setIntersectingSectionId, left, right, ...props }) => {
  const { entry, ref, inView } = useInView({
    threshold: 0.65,
  })

  useEffect(() => {
    if (inView) setIntersectingSectionId(entry?.target.id)
  }, [setIntersectingSectionId, inView, entry?.target.id])

  return (
    <Container ref={ref} {...props}>
      <Content>{left}</Content>
      <Content>{right}</Content>
    </Container>
  )
}

const Container = styled.section`
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
