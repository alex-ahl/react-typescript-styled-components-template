import styled from 'styled-components'

import { PageItemWrapper } from 'components/helpers/ItemWrapper'

export const Container = styled.div`
  display: flex;
  padding: 1em;
`

export const Wrapper = styled(PageItemWrapper)`
  display: flex;
  margin-right: 1em;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'row')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'left')};
  margin: ${props => (props.margin ? props.margin : '')};
`
