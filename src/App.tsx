import { FC, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import { device } from 'styles/breakpoints'

import * as c from 'assets/strings'
import * as i from 'assets/images'

import { useScrollTo } from './hooks/useScrollTo.hook'
import { useActiveClass } from './hooks/useActiveClass.hook'

import { Section } from 'components/Section'
import { Text } from 'components/Text'
import { StyledImage } from 'components/Image'

const App: FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  const [intersectingSectionId, setIntersectingSectionId] = useState<string | undefined>()

  useScrollTo({ clickTargetParentRef: navRef, scrollTargetParentRef: sectionsRef })
  useActiveClass({ targetParentRef: navRef, targetId: intersectingSectionId })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Navbar ref={navRef}>
        <Dot id="section-1" />
        <Dot id="section-2" />
        <Dot id="section-3" />
        <Dot id="section-4" />
      </Navbar>

      <div ref={sectionsRef}>
        <Section
          id="section-1"
          left={<Text headline={c.SHORT_TEXT} intro={c.MEDIUM_TEXT} text={c.LONG_TEXT} />}
          right={<StyledImage small={i.smallImage1} medium={i.mediumImage1} large={i.largeImage1} alt={c.SHORT_TEXT} />}
          {...{ setIntersectingSectionId }}
        />
        <Section
          id="section-2"
          left={<StyledImage small={i.smallImage2} medium={i.mediumImage2} large={i.largeImage2} alt={c.SHORT_TEXT} />}
          right={<Text headline={c.SHORT_TEXT} intro={c.MEDIUM_TEXT} text={c.LONG_TEXT} />}
          {...{ setIntersectingSectionId }}
        />
        <Section
          id="section-3"
          left={<Text headline={c.SHORT_TEXT} intro={c.MEDIUM_TEXT} text={c.LONG_TEXT} />}
          right={<StyledImage small={i.smallImage1} medium={i.mediumImage1} large={i.largeImage1} alt={c.SHORT_TEXT} />}
          {...{ setIntersectingSectionId }}
        />
        <Section
          id="section-4"
          left={<StyledImage small={i.smallImage2} medium={i.mediumImage2} large={i.largeImage2} alt={c.SHORT_TEXT} />}
          right={<Text headline={c.SHORT_TEXT} intro={c.MEDIUM_TEXT} text={c.LONG_TEXT} />}
          {...{ setIntersectingSectionId }}
        />
      </div>
    </ThemeProvider>
  )
}

const Navbar = styled.nav`
  position: fixed;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
`

const Dot = styled.a`
  display: block;
  border-radius: 50%;
  border: 1px solid white;
  width: 12px;
  height: 12px;
  margin: 20px 0;
  text-indent: -999px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.colors.complementory1};
    position: absolute;
    bottom: 0;
    height: 0;
    left: 0;
    right: 0;
    width: 100%;
    transition: height 0.3s ease;
  }

  &:hover {
    cursor: pointer;
  }

  &.active::after {
    height: 100%;
  }

  @media only screen and (${device.xl}) {
    display: none;
  }
`

export default App
