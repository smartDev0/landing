import React from "react";
import Slider from 'react-slick'
import { Grid, Box, Hidden } from "@material-ui/core";
import Typography from "../stories/Typography";
import BackgroundImageContainer from "../stories/BackgroundImageContainer";
import Hero1 from "./../assets/images/hero1.png"
import Hero2 from "./../assets/images/hero2.png"
import Hero3 from "./../assets/images/hero3.png"
import Button from "../stories/Button";
import Section from "../stories/Section";
import Container from "../stories/Container";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
}

const heroImages = [
    {
        image: Hero1,
        title: "Shop New Arrivals",
        text: "Our coolest new items are waiting for you!",
        btnText: "SHOP NOW",
        btnLink: ""
    },
    {
        image: Hero2,
        title: "Our Fave Tees",
        text: "Shop all of our favorites.",
        btnText: "SHOP NOW",
        btnLink: ""
    },
    {
        image: Hero3,
        title: "Men’s Tees",
        text: "Find the perfect shirt.",
        btnText: "SHOP NOW",
        btnLink: ""
    }
]
const Hero = () => {
    return <>
        <Slider {...settings}>
            {heroImages.map((item, i) => (
                <div key={i}>
                    <Hidden smDown>
                        <BackgroundImageContainer image={item.image} height={600} >
                            <Container>
                                <Section>
                                    <Grid container alignItems='center'>
                                        <Grid item xs={12} sm={12} md={5} lg={5}>
                                            <Box>
                                                <Typography variant="h1" color={i == 0 ? 'primary' : 'white'} >
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="h5" color={i == 0 ? 'primary' : 'white'} >
                                                    {item.text}
                                                </Typography>
                                                <Box mt={3}>
                                                    <Button size="medium" variant="dark" >
                                                        {item.btnText}
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Section>
                            </Container>
                        </BackgroundImageContainer>
                    </Hidden>
                    <Hidden mdUp>
                        <BackgroundImageContainer image={item.image} height={227} />
                        <Box bgcolor={'#EFEFEF'}>
                            <Container>
                                <Section variant='landing'>
                                    <Typography variant="h1" color="primary" align={'center'}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h5" color="primary" align={'center'}>
                                        {item.text}
                                    </Typography>
                                    <Box mt={3} justifyContent='center' display={'flex'}>
                                        <Button size="medium" variant='dark'>
                                            {item.btnText}
                                        </Button>
                                    </Box>
                                </Section>
                            </Container>
                        </Box>
                    </Hidden>

                </div>

            ))}
        </Slider>
    </>
}

export default Hero