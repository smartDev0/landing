import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import NavLink from '../stories/NavLink'
import Logo from '../stories/Logo'
import Drawer from '../stories/Drawer'
import { Toggle } from '../hooks/useToggleOpen'

const SideMenu = ({ menus }) => {
    return (
        <Toggle>
            {({ open, handleClick, handleClose }) => (
                <Drawer open={open} handleClick={handleClick} handleClose={handleClose}>
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                        height='100%'
                        width='100%'
                    >

                        <List>
                            <ListItem>
                                <NavLink
                                    color='inherit'
                                    align='left'
                                    to='/'
                                    onClick={handleClose}
                                >
                                    <Logo size='medium' />
                                </NavLink>
                            </ListItem>
                            <Divider />
                            {menus.map((item, i) => (
                                <ListItem key={i}>
                                    <NavLink
                                        to={item.router}
                                        align='left'
                                        fullWidth
                                        onClick={handleClose}
                                        display='standard'
                                    >
                                        {item.text}
                                    </NavLink>
                                </ListItem>
                            ))}

                        </List>
                    </Box>
                </Drawer>
            )}
        </Toggle>
    )
}

SideMenu.propTypes = {
    menus: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                router: PropTypes.string.isRequired
            })
        )
    )
}

SideMenu.defaultProps = {
    menus: []
}

export default SideMenu
