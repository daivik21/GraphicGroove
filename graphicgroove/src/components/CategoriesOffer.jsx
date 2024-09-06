import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import image1 from '../assets/images/Image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import { styled } from '@mui/material';


const Card = styled('div')(({ theme }) => ({
  height: '35rem',
  width: '50rem',
  textAlign: 'center',
  background: 'grey',
  color: '#FFF',
  fontSize: '12px',
  textTransform: 'uppercase',
  borderRadius: '10px',
  [theme.breakpoints.down('lg')]: {
    height: '35rem',
    width: '45rem',
  },
  [theme.breakpoints.down('md')]: {
    height: '35rem',
    width: '35rem',
  },
  [theme.breakpoints.down('sm')]: {
    height: '35rem',
    width: '23rem',
  },
  [theme.breakpoints.down('xs')]: {
    height: '35rem',
    width: '20rem',
  },
   [theme.breakpoints.down('xxs')]: {
    height: '30rem',
    width: '17rem',
  },
}));

const CarouselItem = ({ src, alt }) => (
  <Card>
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </Card>
);
const MyCarousel = () => {
  // Image data array
  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
  ];

  return (
    <ReactCardCarousel autoplay={true} autoplay_speed={2000} >
      {images.map((image, index) => (
        <CarouselItem key={index} src={image.src} alt={image.alt} />
      ))}
    </ReactCardCarousel>
  );
};

export default MyCarousel;
