import { FC } from 'react'
import { styled } from 'styled-components'
import { baseHeightStyles } from 'styles/styles'

const Header: FC = () => {
  return <Container>test</Container>
}

const Container = styled.section`
  ${baseHeightStyles}

  border: 2px solid red;
`

export default Header
