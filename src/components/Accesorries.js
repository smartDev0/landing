import React from "react"
import { Box, Grid, Hidden } from "@material-ui/core"
import Container from "../stories/Container"
import Section from "../stories/Section"
import menImage from "../assets/images/mens.png"
import womenImage from "../assets/images/womens.png"
import accessoriesImage from "../assets/images/accesories.png"
import resImage from "../assets/images/accessories-res.png"

import Button from "../stories/Button"
import Typography from "../stories/Typography"
const accesorries = [
    {
        img: womenImage,
        imgRes: womenImage,
        title: "Women's"
    },
    {
        img: menImage,
        imgRes: menImage,
        title: "Men's"
    },
    {
        img: accessoriesImage,
        imgRes: resImage,
        title: "Accessories"
    }
]
const Accessories = () => {

    const AccesorriesCard = ({ item, index }) => {
        return (
            <Grid item xs={(index + 1) % 3 == 0 ? 12 : 6} sm={(index + 1) % 3 == 0 ? 12 : 6} md={4} lg={4}>
                <Hidden smDown>
                    <img src={item.img} alt={item.title} width={'100%'} />
                </Hidden>
                <Hidden mdUp>
                    <img src={item.imgRes} alt={item.title} width={'100%'} />
                </Hidden>
                <Box mt={-7} >
                    <Button fullWidth >
                        <Typography variant={'h4'}>
                            {item.title}
                        </Typography>
                    </Button>
                </Box>
            </Grid>)
    }
    return (
        <Container>
            <Section variant="landing">
                <Grid container display="flex" alignItems='center' spacing={1}>
                    {accesorries.map((item, i) => (
                        <AccesorriesCard item={item} key={i} index={i} />
                    ))}
                </Grid>

            </Section>

        </Container>
    )
}
export default Accessories