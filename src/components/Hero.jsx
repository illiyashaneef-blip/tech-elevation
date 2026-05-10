import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/slider.a.jpg'
import slider2 from '../assets/slider.b.jpg'
import slider3 from '../assets/slider.c.jpg'
function Hero() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={slider1} alt="" />

        <div className='overlay'></div>
        <Carousel.Caption>
          <h3>ELEVATE YOURSELF</h3>
          <p>Empowering the next generation of tech professionals with real-world knowledge, digital skills, and industry insights. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider2} alt="" />

         <div className='overlay'></div>
        <Carousel.Caption>
          <h3>Beyond the Classroom </h3>
          
          <p>Gain practical knowledge in branding, career growth, and navigating the tech industry from experienced professionals. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider3} alt="" />

         <div className='overlay'></div>
        <Carousel.Caption>
          <h3>Grow Smarter with Data & Skills </h3>
          <p>
           From business insights to personal development, Tech Elevation equips you with tools to thrive in today’s tech-driven world. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;