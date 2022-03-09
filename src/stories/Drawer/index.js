import React from 'react'
import PropTypes from 'prop-types'
import MuiDrawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const Drawer = ({ children, open, handleClick, handleClose }) => (
  <div>
    <IconButton
      edge='start'
      color='inherit'
      aria-label='menu'
      onClick={handleClick}
    >
      <MenuIcon />
    </IconButton>
    <MuiDrawer open={open} onClose={handleClose}>
      {children}
    </MuiDrawer>
  </div>
)

Drawer.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

Drawer.defaultProps = {
  children: null
}

export default Drawer
