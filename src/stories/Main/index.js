import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MuiBox from '@material-ui/core/Box'

const StyledBox = styled(MuiBox)`
  min-height: calc(100vh - 136px);
`

const Main = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
)

Main.propTypes = {
  children: PropTypes.node
}

Main.defaultProps = {
  children: null
}

export default Main
