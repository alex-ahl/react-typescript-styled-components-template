import CSSObject, { CSSProp } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      main: string
      secondary: string
      complementory1: string
      complementory2: string
      complementory3: string
      white: string
      smoke: string
      black: string
    }
    fonts: string[]
    fontSizes: {
      extraSmall: string
      small: string
      medium: string
      large: string
      extraLarge: string
    }
    fontWeights: { regular: number; light: number }
    imageSizes: {
      small: string
      medium: string
      large: string
    }
  }
}

declare module 'react' {
  export interface Attributes {
    css?: CSSProp | typeof CSSObject
  }
}
