import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import LogoImage from '../../assets/images/logo.png'

const StyledLogo = styled.img`
  height: ${props => props.theme.spacing(4)}px;
  ${props =>
    props.size === 'small' &&
    css`
      height: ${props.theme.spacing(2)}px;
      ${props.theme.breakpoints.up('lg')} {
        height: ${props.theme.spacing(2.5)}px;
      }
    `}
  ${props =>
    props.size === 'medium' &&
    css`
      height: ${props.theme.spacing(3)}px;
      ${props.theme.breakpoints.up('lg')} {
        height: ${props.theme.spacing(3.5)}px;
      }
    `}
  ${props =>
    props.size === 'mediumLarge' &&
    css`
      height: ${props.theme.spacing(6)}px;
      ${props.theme.breakpoints.up('lg')} {
        height: ${props.theme.spacing(4)}px;
      }
    `}
  ${props =>
    props.size === 'large' &&
    css`
      height: ${props.theme.spacing(4)}px;
      ${props.theme.breakpoints.up('lg')} {
        height: ${props.theme.spacing(6)}px;
      }
    `}
`

const Logo = ({ size }) => (
  <StyledLogo src={LogoImage} alt='logo' size={size} />
)

Logo.propTypes = {
  size: PropTypes.string
}

Logo.defaultProps = {
  size: 'medium'
}

export default Logo
