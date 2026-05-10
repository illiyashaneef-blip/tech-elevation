import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Footer = () => {
  return (
    <div>
      <Container fluid className='bg-black text-white py-5'>
      <Row className='align-items-center g-4'>
          <Col className='mg-5'>

            <h4>Atibyan Tech Meetup</h4>
            <p> A monthly tech gathering powered by Atibyan Tech Academy, focused on helping students and aspiring professionals grow beyond technical skills through real-world insights and the Tech Elevation experience.|</p>

            <h5>Tagline:</h5>
            <p> Connect. Learn. Elevate.</p>
          </Col>
          <Col>Quick Links
            <ul class="list-unstyled">
              <li> Home</li>
              <li>About the Meetup</li>
              <li> Speakers</li>
              <li> Gallery</li>
              <li> Testimonials</li>
              <li>Register</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col>
          Contact & Info

           <b>  Location:</b>
            Atibyan Tech Academy, Lagos, Nigeria.

        <b>Schedule:</b>
            Every Last Saturday of the Month

            <b> Email:</b>
            info@atibyan.com

             Phone:
            +234 XXX XXX XXXX</Col>
        </Row>
       <Row eclassName="bg-primary text-white px-4 py-2 roundd-pill d-inline-block">
          <Col>© 2026 Atibyan Tech Academy. All rights reserved.</Col>
          <Col>Designed for growth, learning, and real-world tech exposure.</Col>
        </Row>
        <Row className='sub-Footer'></Row>

      </Container>

    </div>
  )
}

export default Footer
