import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import MuiButton from '@material-ui/core/Button'

const StyledButton = styled(MuiButton)`
  text-transform: lowercase;
  ${props =>
    props.align === 'left' &&
    css`
      justify-content: flex-start;
    `}
  ${props =>
    props.align === 'space-between' &&
    css`
      justify-content: space-between;
    `}
  ${props =>
    props.bgcolor === 'primary' &&
    css`
      background: ${props.theme.palette.primary.main};
      color: ${props.theme.palette.background.paper};
      &:hover {
        background: ${props.theme.palette.primary.main};
      }
    `}
  ${props =>
    props.display === 'standard' &&
    css`
      text-transform: capitalize;
      font-weight: 500;
      padding: 6px 24px;
      &:hover {
        color: ${props.theme.palette.primary.light};
      }
    `}
  ${props =>
    props.display === 'primary' &&
    css`
      text-transform: inherit;
      color: ${props.theme.palette.primary.main};
      font-weight: 500;
      &:hover {
        color: ${props.theme.palette.primary.main};
      }
    `}
  ${props =>
    props.text === 'inherit' &&
    css`
      text-transform: inherit;
    `}
  ${props =>
    props.color === 'primary' &&
    css`
      color: ${props.theme.palette.primary.main};
    `}
`

const NavLink = ({ children, to, align, bgcolor, ...props }) => {
  let component
  if (to) {
    component = Link
  }

  return (
    <StyledButton
      color='inherit'
      bgcolor={bgcolor}
      size='large'
      align={align}
      to={to}
      component={component}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  align: PropTypes.string,
  bgcolor: PropTypes.string
}

NavLink.defaultProps = {
  children: null,
  to: undefined,
  align: '',
  bgcolor: ''
}

export default NavLink
