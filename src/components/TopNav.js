import React from "react";
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
const TopNav = () => {
    return (
        <Box color={"white"} bgcolor={"black"} paddingY={1}>
            <Typography align="center">
                FREE SHIPPING ON ALL ORDERS OVER $75
            </Typography>
        </Box>
    );
}

export default TopNav