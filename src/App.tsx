import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Section from 'components/Section'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Section />
  </ThemeProvider>
)

export default App
