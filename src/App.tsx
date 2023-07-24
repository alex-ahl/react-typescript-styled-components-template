import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

import * as c from 'assets/strings'
import * as i from 'assets/images'

import { Section } from 'components/Section'
import { Text } from 'components/Text'
import { StyledImage } from 'components/Image'

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Section
      left={<Text headline={c.SHORT_TEXT} intro={c.MEDIUM_TEXT} text={c.LONG_TEXT} />}
      right={<StyledImage small={i.smallImage1} medium={i.mediumImage1} large={i.largeImage1} alt={c.SHORT_TEXT} />}
    />
    <Section
      left={<StyledImage small={i.smallImage2} medium={i.mediumImage2} large={i.largeImage2} alt={c.SHORT_TEXT} />}
      right={<Text headline={c.SHORT_TEXT} intro={c.MEDIUM_TEXT} text={c.LONG_TEXT} />}
    />
    <Section
      left={<Text headline={c.SHORT_TEXT} intro={c.MEDIUM_TEXT} text={c.LONG_TEXT} />}
      right={<StyledImage small={i.smallImage1} medium={i.mediumImage1} large={i.largeImage1} alt={c.SHORT_TEXT} />}
    />
    <Section
      left={<StyledImage small={i.smallImage2} medium={i.mediumImage2} large={i.largeImage2} alt={c.SHORT_TEXT} />}
      right={<Text headline={c.SHORT_TEXT} intro={c.MEDIUM_TEXT} text={c.LONG_TEXT} />}
    />
  </ThemeProvider>
)

export default App
