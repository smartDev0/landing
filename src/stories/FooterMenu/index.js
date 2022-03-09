import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const MuiTypography = styled(Typography)`
  font-style: normal;
  font-weight: normal;
  font-family: Pacifico;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: white;

  ${props =>
    props.transform === 'lowercase' &&
    css`
      text-transform: lowercase;
    `}
`

export const MenuLinkContainer = styled.div``

export const StarsContainer = styled.div`
  justify-content: end;
  display: flex;
`
export const MuiLink = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    color: ${props => props.theme.palette.primary.main};
  }
`

const MenuLink = ({ name, items }) => {
  return (
    <MenuLinkContainer>
      <MuiTypography>{name}</MuiTypography>
      {items.map(list =>
        list.map(service => (
          <div key={service.name}>
            <MuiLink
              display='inline'
              size='small'
              to={`/${service.name}`}
            >
              {service.name}
            </MuiLink>
          </div>
        ))
      )}
    </MenuLinkContainer>
  )
}
MenuLink.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        router: PropTypes.string.isRequired
      })
    )
  ),
  name: PropTypes.string
}

MenuLink.defaultProps = {
  items: [],
  name: ''
}

export default MenuLink
