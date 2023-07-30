import { FC } from 'react'
import styled, { css } from 'styled-components'
import { device } from 'styles/breakpoints'

interface TextProps {
  headline: string
  intro: string
  text: string
}

export const Text: FC<TextProps> = ({ headline, intro, text }) => {
  return (
    <TextWrapper>
      <Headline>{headline.toUpperCase()}</Headline>
      <Introduction>{intro}</Introduction>
      <TextStyle>{text}</TextStyle>
    </TextWrapper>
  )
}

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`

const maxWidth = css`
  max-width: 550px;
`

const Headline = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xxl};

  @media only screen and (${device.xxl}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  @media only screen and (${device.xl}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  @media only screen and (${device.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  @media only screen and (${device.md}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  @media only screen and (${device.md}) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  @media only screen and (${device.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`

const Introduction = styled.span`
  color: ${({ theme }) => theme.colors.smoke};
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSizes.xl};

  @media only screen and (${device.xxl}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  @media only screen and (${device.xl}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  @media only screen and (${device.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  @media only screen and (${device.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media only screen and (${device.md}) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  @media only screen and (${device.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`

const TextStyle = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: ${({ theme }) => theme.fontSizes.large};
  max-width: 700px;

  @media only screen and (${device.xxl}) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    ${maxWidth}
  }

  @media only screen and (${device.xl}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    ${maxWidth}
  }

  @media only screen and (${device.lg}) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    ${maxWidth}
  }

  @media only screen and (${device.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    ${maxWidth}
  }

  @media only screen and (${device.md}) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    ${maxWidth}
  }

  @media only screen and (${device.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    ${maxWidth}
  }
`
