import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slider2 from '../assets/slider.b.jpg'


const TheOrganizer = () => {
    return (
        <div>
            <Container fluid className='bg-black text-white'>
                <Row className='align-items-center g-4'>
                    
                    <Col>
                        <p> About Atibyan Tech Academy</p>

                        
                        <p> Atibyan Tech Academy is committed to developing skilled, confident, and industry-ready tech professionals through practical training and mentorship.</p>
                        <p>  The academy provides hands-on learning experiences across various areas of technology, ensuring that students gain not only knowledge but also the ability to apply it effectively.</p>

                        <p>   Recognizing the importance of exposure beyond technical training, Atibyan Tech Academy established the Atibyan Tech Meetup as a platform to complement its learning programs.</p>

                        <p>   Through initiatives like Tech Elevation, the academy continues to empower students with the right mindset, practical skills, and real-world understanding needed to thrive in today’s competitive tech landscape. </p>

                    </Col>
                     <Col md={6} sm={12}>
                    <div className="p-4 bg-black   h-100"></div>
                        <img src={slider2} alt="" width="100%" />
                    </Col>
                </Row>
                <Row className='sub-TheOrganizer'>

                


                </Row>

                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default TheOrganizer
