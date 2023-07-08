import { FC } from 'react'

interface ImageProps {
  small: string
  medium: string
  large: string
}

const Image: FC = ({ small, medium, large }: ImageProps) => {
  return <img srcSet={`${small} 750w, ${medium} 1366w, ${large} 1920w`} src={small} alt="My Image" />
}
