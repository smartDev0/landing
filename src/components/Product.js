import React from "react";
import Slider from 'react-slick'
import styled, { css } from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Container from "../stories/Container";
import Section from "../stories/Section";
import productImage from "../assets/images/product.png";
import Typography from "../stories/Typography";

const products = [
    {
        img: productImage,
        title: "Product Title",
        type: "WOMEN'S T-SHIRT",
        price: '$19.99'
    },
    {
        img: productImage,
        title: "Product Title",
        type: "WOMEN'S T-SHIRT",
        price: '$19.99'
    },
    {
        img: productImage,
        title: "Product Title",
        type: "WOMEN'S T-SHIRT",
        price: '$19.99'
    },
    {
        img: productImage,
        title: "Product Title",
        type: "WOMEN'S T-SHIRT",
        price: '$19.99'
    },
    {
        img: productImage,
        title: "Product Title",
        type: "WOMEN'S T-SHIRT",
        price: '$19.99'
    }
];


export const CarouselButton = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent !important;
  color: rgba(16, 81, 79, 0.8) !important;
  cursor: pointer;
  &:hover {
    background-color: transparent !important;
  }
  ${props =>
    props.display === 'left' &&
    css`
    top: calc(50% - 25px);
    position: absolute;
    z-index: 100;
    `}
  ${props =>
    props.display === 'right' &&
    css`
      right: 0px;
      position: absolute;
      bottom: calc(50% - 25px);
    `}
`
const NextArrow = props => {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props
    return (
      <CarouselButton onClick={onClick} display='right'>
        <ArrowForwardIosIcon style={{ color: '#10504F' }} />
      </CarouselButton>
    )
  }
  
  const PrevArrow = props => {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props
    return (
      <CarouselButton onClick={onClick} display='left'>
        <ArrowBackIosIcon style={{ color: '#10504F' }} />
      </CarouselButton>
    )
  }
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
}
const Product = () => {
    return (
        <Container>
            <Section variant="landing">
                <Typography variant={'h1'} align='center'>New Arrivals</Typography>
                <Slider {...settings}>
                    {products.map((item, i) => (
                        <div key={i}>
                            <img src={item.img} alt={item.title} width="100%"/>
                            <Typography variant={'h5'} align='center'>
                                {item.title}
                            </Typography>
                            <Typography variant={'body1'} align='center'>
                                {item.type}
                            </Typography>
                            <Typography  variant={'body2'} align='center' color="primary">
                                {item.price}
                            </Typography>
                        </div>
                    ))}
                </Slider>

            </Section>
        </Container>
    )
}

export default Product;