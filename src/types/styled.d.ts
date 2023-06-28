import 'styled-components'

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
      small: string
      medium: string
      large: string
    }
  }
}
