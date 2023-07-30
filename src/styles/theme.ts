import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: '#D5B37C',
    secondary: '#443d27',
    complementory1: '#FFEDCB',
    complementory2: '#2D2F29',
    complementory3: '#1F1F1B',
    white: '#FFF',
    smoke: '#f6f6f6',
    black: '#4B4B4B',
  },
  fontSizes: {
    xxl: '1.0rem',
    xl: '0.6rem',
    large: '0.45rem',
    medium: '0.4rem',
    small: '0.28rem',
    xs: '0.25rem',
    xxs: '0.21rem',
  },
  fontWeights: { light: 300, regular: 400, bold: 700 },
  fonts: ['Nunito Sans'],
  imageSizes: { large: '1920w', medium: '1366w', small: '750w' },
}

export default theme
