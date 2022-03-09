import React from 'react'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import EmailIcon from '@material-ui/icons/Email';
import Typography from '../stories/Typography'
import Section from '../stories/Section'
import Button from '../stories/Button'
import TextField from '../stories/TextField'
import Container from '../stories/Container';
import { Hidden } from '@material-ui/core';


const ContactForm = ({ ...props }) => {
    return (
        <Section variant='landing' bgcolor={"#10504F"} {...props}>
            <Container>
                <Grid container spacing={1} alignItems='center'>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Hidden smDown>
                            <Box display='flex' alignItems='center' justifyContent="center">
                                <EmailIcon style={{ color: "white", fontSize: 60 }} />
                                <Box ml={2}>
                                    <Typography variant="h2" color="white" weight={'light'} style={{ margin: 0 }} >
                                        Sign Up & Stay Connected
                                    </Typography>
                                </Box>
                            </Box>
                        </Hidden>
                        <Hidden mdUp>
                            <Box display='flex' alignItems='center' justifyContent="center" mb={2}>
                                <EmailIcon style={{ color: "white", fontSize: 30 }} />
                                <Box ml={2}>
                                    <Typography variant="h4" color="white" weight={'light'} style={{ margin: 0 }} >
                                        Sign Up & Stay Connected
                                    </Typography>
                                </Box>
                            </Box>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Hidden smDown>
                            <Typography variant='body1' weight='light' color='white'>
                                Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
                            </Typography>
                        </Hidden>
                        <Hidden mdUp>
                            <Typography variant='body1' weight='light' color='white' align={'center'}>
                                Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
                            </Typography>
                            <Box mb={2}/>
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            margin='none'
                            size='small'
                            label='Enter Your Email Address'
                            name='email'
                            display="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <Box>
                            <Button type='submit' size='medium' fullWidth variant="border-transparent">
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Section>
    )
}

export default ContactForm
