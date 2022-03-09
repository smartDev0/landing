import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MuiAppBar from '@material-ui/core/AppBar'
import MuiToolBar from '@material-ui/core/Toolbar'
import Container from '../Container'

const StyledAppBar = styled(MuiAppBar)`
  color: white;
  height: ${props => props.theme.spacing(12)}px;
  display: flex;
  align-items: center;
  flex-direction: inherit;
  @media (max-width: 768px) {
    height: ${props => props.theme.spacing(8)}px;
  }
`
const StyledToolBar = styled(MuiToolBar)`
  padding: 0px;
`

const AppBar = ({ children, ...props }) => (
  <StyledAppBar position='relative' {...props}>
    <Container>
      <StyledToolBar>{children}</StyledToolBar>
    </Container>
  </StyledAppBar>
)

AppBar.propTypes = {
  children: PropTypes.node
}

AppBar.defaultProps = {
  children: null
}

export default AppBar
