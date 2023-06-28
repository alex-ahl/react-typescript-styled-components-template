import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import PageBody from 'components/PageBody'

import GlobalStyle from './styles/global'
import { theme } from './styles/theme'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <PageBody />
  </ThemeProvider>
)

export default App
