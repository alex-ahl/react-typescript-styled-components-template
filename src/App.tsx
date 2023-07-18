import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'
import Section from 'components/Section'
import { Text } from 'components/Text'

import { StyledImage } from 'components/Image'

import smallImage1 from 'assets/images/cabin1_small.jpg'
import mediumImage1 from 'assets/images/cabin1_medium.jpg'
import largeImage1 from 'assets/images/cabin1_large.jpg'

import smallImage2 from 'assets/images/cabin2_small.jpg'
import mediumImage2 from 'assets/images/cabin2_medium.jpg'
import largeImage2 from 'assets/images/cabin2_large.jpg'

import * as constants from 'assets/strings'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Section
      contentLeft={
        <Text headline={constants.SHORT_TEXT} introduction={constants.MEDIUM_TEXT} text={constants.LONG_TEXT} />
      }
      contentRight={
        <StyledImage small={smallImage1} medium={mediumImage1} large={largeImage1} alt={constants.SHORT_TEXT} />
      }
    />
    <Section
      contentLeft={
        <StyledImage small={smallImage2} medium={mediumImage2} large={largeImage2} alt={constants.SHORT_TEXT} />
      }
      contentRight={
        <Text headline={constants.SHORT_TEXT} introduction={constants.MEDIUM_TEXT} text={constants.LONG_TEXT} />
      }
    />
  </ThemeProvider>
)

export default App
