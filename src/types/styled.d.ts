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
      xxs: string
      xs: string
      small: string
      medium: string
      large: string
      xl: string
      xxl: string
    }
    fontWeights: { light: number; regular: number; bold: number }
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
