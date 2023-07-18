import { FC } from 'react'
import styled from 'styled-components'

interface TextProps {
  headline: string
  introduction: string
  text: string
}

export const Text: FC<TextProps> = ({ headline, introduction, text }) => {
  return (
    <TextWrapper>
      <Headline>{headline}</Headline>
      <Introduction>{introduction}</Introduction>
      <TextStyle>{text}</TextStyle>
    </TextWrapper>
  )
}

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Headline = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
`

const Introduction = styled.span`
  color: ${({ theme }) => theme.colors.smoke};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 8px;
`

const TextStyle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  max-width: 500px;
  color: ${({ theme }) => theme.colors.main};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`
