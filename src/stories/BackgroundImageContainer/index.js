import React from "react"
import styled, { css } from 'styled-components'

export const BackgroundDiv = styled.div`
background-image: url(${props => props.bgImage});
background-size: cover;
background-repeat: no-repeat; 
height:${props => props.height}px;
width: 100%;
`
const BackgroundImageContainer = ({ image, children, height }) => {
    return (
        <BackgroundDiv bgImage={image} height={height}>
            {children}
        </BackgroundDiv>
    )
}

export default BackgroundImageContainer