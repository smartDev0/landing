import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MuiBox from '@material-ui/core/Box'
import MuiToolBar from '@material-ui/core/Toolbar'
import Container from '../Container'

const StyledBox = styled(MuiBox)`
  background: #000000;
  color: white;
`
const StyledToolBar = styled(MuiToolBar)`
  padding: 60px 0px 60px 0;
  @media (max-width: 768px) {
    padding: 30px 0px 30px 0;
  }
`

const BottomBar = ({ children, ...props }) => (
  <StyledBox {...props}>
    <Container>
      <StyledToolBar>{children}</StyledToolBar>
    </Container>
  </StyledBox>
)

BottomBar.propTypes = {
  children: PropTypes.node
}

BottomBar.defaultProps = {
  children: null
}

export default BottomBar
