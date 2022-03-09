import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import MuiTypography from '@material-ui/core/Typography'

const StyledTypography = styled(MuiTypography)`
  ${props =>
        props.variant === 'h0' &&
        css`
      font-size: ${props.theme.typography.h0.fontSize};
      font-weight: ${props.theme.typography.h0.fontWeight};
      line-height: ${props.theme.typography.h0.lineHeight};
      margin-bottom: ${props.theme.typography.h0.marginBottom};
    `}
  ${props =>
        props.variant === 'h1' &&
        css`
      font-size: ${props.theme.typography.h1.fontSize};
      line-height: ${props.theme.typography.h1.lineHeight};
      letter-spacing: ${props.theme.typography.h1.letterSpacing};
      font-family: ${props.theme.typography.h1.fontFamily};
      margin-bottom: ${props.theme.typography.h1.marginBottom};
      @media (max-width: 776px) {
        font-size: ${props.theme.typography.h2.fontSize};
      }
    `}
  ${props =>
        props.variant === 'h2' &&
        css`
      font-size: ${props.theme.typography.h2.fontSize};
      line-height: ${props.theme.typography.h2.lineHeight};
      font-family: ${props.theme.typography.h2.fontFamily};
      margin-bottom: ${props.theme.typography.h2.marginBottom};
      letter-spacing: ${props.theme.typography.h2.letterSpacing};
      @media (max-width: 776px) {
        font-size: 32px;
      }
    `}
  ${props =>
        props.variant === 'h3' &&
        css`
      font-size: ${props.theme.typography.h3.fontSize};
      line-height: ${props.theme.typography.h3.lineHeight};
      margin-bottom: ${props.theme.typography.h3.marginBottom};
      letter-spacing: ${props.theme.typography.h3.letterSpacing};
      @media (max-width: 776px) {
        font-size: 28px;
      }
    `}
  ${props =>
        props.variant === 'h4' &&
        css`
      font-size: ${props.theme.typography.h4.fontSize};
      line-height: ${props.theme.typography.h4.lineHeight};
      letter-spacing: ${props.theme.typography.h4.letterSpacing};
      font-family: ${props.theme.typography.h4.fontFamily};
    `}
  ${props =>
        props.variant === 'h5' &&
        css`
      font-size: ${props.theme.typography.h5.fontSize};
      line-height: ${props.theme.typography.h5.lineHeight};
      letter-spacing: ${props.theme.typography.h5.letterSpacing};
      font-family: ${props.theme.typography.h5.fontFamily};
    `}
  ${props =>
        props.variant === 'body1' &&
        css`
      font-size: ${props.theme.typography.body1.fontSize};
      line-height: ${props.theme.typography.body1.lineHeight};
      letter-spacing: ${props.theme.typography.body1.letterSpacing};
      font-family: ${props.theme.typography.body1.fontFamily};
      @media (max-width: 776px) {
        font-size: 14px;
        line-height: ${props.theme.typography.body2.lineHeight};
      }
    `}
  ${props =>
        props.variant === 'body2' &&
        css`
      font-size: ${props.theme.typography.body2.fontSize};
      line-height: ${props.theme.typography.body2.lineHeight};
      letter-spacing: ${props.theme.typography.body2.letterSpacing};
      font-family: ${props.theme.typography.body2.fontFamily};
    `}
  ${props =>
        props.variant === 'caption' &&
        css`
      font-size: ${props.theme.typography.caption.fontSize};
      line-height: ${props.theme.typography.caption.lineHeight};
      letter-spacing: ${props.theme.typography.caption.letterSpacing};
      font-family: ${props.theme.typography.caption.fontFamily};
    `}
  ${props =>
        props.color === 'dark' &&
        css`
      color: rgba(0, 0, 0, 0.87);
    `}
    ${props =>
        props.color === 'white' &&
        css`
          color: #FFFFFF;
        `}
  ${props =>
        props.color === 'grey' &&
        css`
      color: #858585;
    `}
  ${props =>
        props.color === 'primary' &&
        css`
      color: #10504F;
    `}
  ${props =>
        props.weight === 'bold' &&
        css`
      font-weight: bold;
    `}
  ${props =>
        props.weight === 'semibold' &&
        css`
      font-weight: 600;
    `}
  ${props =>
        props.weight === 'medium' &&
        css`
      font-weight: 500;
    `}
  ${props =>
        props.weight === 'light' &&
        css`
      font-weight: 300;
    `}
  ${props =>
        props.mask === 'h0' &&
        css`
      font-size: ${props.theme.typography.h0.fontSize};
      font-weight: ${props.theme.typography.h0.fontWeight};
      line-height: ${props.theme.typography.h0.lineHeight};
      margin-bottom: ${props.theme.typography.h0.marginBottom};
    `}
`

const Typography = ({ children, variant, align, weight, mask, ...props }) => (
    <StyledTypography
        variant={variant}
        align={align}
        weight={weight}
        mask={mask}
        {...props}
    >
        {children}
    </StyledTypography>
)

Typography.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    variant: PropTypes.string,
    align: PropTypes.string,
    mask: PropTypes.string,
    weight: PropTypes.string
}

Typography.defaultProps = {
    name: '',
    variant: 'h1',
    align: 'left',
    mask: '',
    weight: 'medium'
}

export default Typography
