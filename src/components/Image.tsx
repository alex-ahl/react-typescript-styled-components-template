import { FC, HTMLProps } from 'react'
import { styled, useTheme } from 'styled-components'

interface ImageProps extends HTMLProps<HTMLImageElement> {
  small: string
  medium: string
  large: string
}

const Image: FC<ImageProps> = ({ small, medium, large, ...props }) => {
  const { imageSizes } = useTheme()

  return (
    <img
      src={medium}
      srcSet={`${small} ${imageSizes.small}, ${medium} ${imageSizes.medium}, ${large} ${imageSizes.large}`}
      {...props}
    />
  )
}

export const StyledImage = styled(Image)`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`
