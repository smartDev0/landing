import React from "react";
import { Grid, Box } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import BottomBar from "../stories/BottomBar";
import { MuiLink, MuiTypography } from "../stories/FooterMenu";
import IconButton from "../stories/IconButton";


const customServices = [
    {
        name: "Accessibility",
        router: "/"
    },
    {
        name: "Contact Us",
        router: "/"
    },
    {
        name: "Return Policy",
        router: "/"
    },
    {
        name: "FAQ",
        router: "/"
    },
    {
        name: "Gift Certificates",
        router: "/"
    },
    {
        name: "Wishlist",
        router: "/"
    }
];
const companys = [
    {
        name: "About Us",
        router: "/"
    },
    {
        name: "Careers",
        router: "/"
    },
    {
        name: "Press",
        router: "/"
    },
    {
        name: "Affiliates",
        router: "/"
    },
]
const Footer = () => {
    return (
        <BottomBar>
            <Grid container spacing={3}>
                <Box clone>
                    <Grid item xs={12} sm={12} md={2}>
                        <MuiTypography>
                            Customer Service
                        </MuiTypography>
                        {customServices.map((item, i) => (
                            <div key={i}>
                                <MuiLink
                                    to={item.router}
                                    display='inline'
                                    size='small'>
                                    {item.name}
                                </MuiLink>
                            </div>
                        ))}
                    </Grid>
                </Box>
                <Box clone>
                    <Grid item xs={12} sm={12} md={2}>
                        <MuiTypography>
                            Company
                        </MuiTypography>
                        {companys.map((item, i) => (
                            <div key={i}>
                                <MuiLink
                                    to={item.router}
                                    display='inline'
                                    size='small'>
                                    {item.name}
                                </MuiLink>
                            </div>
                        ))}
                    </Grid>
                </Box>
                <Box clone>
                    <Grid item xs={12} sm={12} md={6} />
                </Box>
                <Box clone>
                    <Grid item xs={12} sm={12} md={2}>
                        <MuiTypography>
                            Follow Us
                        </MuiTypography>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </Grid>
                </Box>
            </Grid>
        </BottomBar>
    )
}

export default Footer