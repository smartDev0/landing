
import React from "react";
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import bgImage from '../assets/images/favorite-image.png'
import BackgroundImageContainer from "../stories/BackgroundImageContainer";
import Section from "../stories/Section";
import Typography from "../stories/Typography";
import Button from "../stories/Button";
import Container from "../stories/Container";
import { Hidden } from "@material-ui/core";
const Favorite = () => {
    return (
        <>
            <Hidden smDown>
                <BackgroundImageContainer image={bgImage} height={600}>
                    <Container>
                        <Section variant="landing">
                            <Grid container alignItems='center'>
                                <Grid item xs={12} sm={12} md={7} lg={7} />
                                <Grid item xs={12} sm={12} md={5} lg={5}>
                                    <Box>
                                        <Typography variant="h1" color="white" >
                                            Our Favorite Tees
                                        </Typography>
                                        <Typography variant="h5" color="white" >
                                            Everyday tees
                                        </Typography>
                                        <Box mt={3}>
                                            <Button size="medium">
                                                SHOP NOW
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
                <BackgroundImageContainer image={bgImage} height={227} />
                <Container>
                    <Section variant='landing'>
                        <Typography variant="h1" color="primary" align={'center'}>
                            Our Favorite Tees
                        </Typography>
                        <Typography variant="h5" color="primary" align={'center'}>
                            Everyday tees
                        </Typography>
                        <Box mt={3} justifyContent='center' display={'flex'}>
                            <Button size="medium" variant='dark'>
                                SHOP NOW
                            </Button>
                        </Box>
                    </Section>
                </Container>
            </Hidden>
        </>
    )
}

export default Favorite