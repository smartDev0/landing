import React from "react";
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '../stories/IconButton'
import AppBar from "../stories/AppBar";
import NavLink from "../stories/NavLink";
import Logo from "../stories/Logo";
import SideMenu from "./SideMenu";


const menus = [
    {
        text: "MEN'S",
        router: "/"
    },
    {
        text: "WOMEN'S",
        router: "/"
    },
    {
        text: "ACCESSORIES",
        router: "/"
    },
    {
        text: "SALE!",
        router: "/"
    }
]
const TopBar = () => {
    return (
        <AppBar>
            <Box display='flex' alignItems='center' flex={1} >
                <Hidden mdUp>
                    <SideMenu menus={menus} />
                </Hidden>
                <NavLink to="/">
                    <Logo size="large" />
                </NavLink>
            </Box>
            <Hidden smDown>
                <Box display='flex' alignItems='center' flex={2} justifyContent="center">
                    {menus.map((item, i) => (
                        <NavLink to={item.router} display='standard' key={i}>
                            {item.text}
                        </NavLink>
                    ))}
                </Box>
            </Hidden>

            <Box display='flex' alignItems='center' flex={1} justifyContent="flex-end">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <ShoppingCartIcon />
                </IconButton>
            </Box>
        </AppBar>
    )
}

export default TopBar;