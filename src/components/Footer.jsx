import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-black text-white pt-5 pb-3">

        {/* Main Footer */}
        <Container>
          <Row className="g-5">

            {/* About */}
            <Col lg={4} md={6}>
              <h3 className="fw-bold text-primary mb-3">
                Atibyan Tech Meetup
              </h3>

              <p className="text-light">
                A monthly tech gathering powered by Atibyan Tech Academy,
                focused on helping students and aspiring professionals grow
                beyond technical skills through real-world insights and the
                Tech Elevation experience.
              </p>

              <h5 className="fw-bold text-warning mt-4">
                Tagline
              </h5>

              <p className="mb-0">
                Connect. Learn. Elevate.
              </p>
            </Col>

            {/* Quick Links */}
            <Col lg={4} md={6}>
              <h4 className="fw-bold text-primary mb-3">
                Quick Links
              </h4>

              <ul className="list-unstyled footer-links">
                <li className="mb-2">Home</li>
                <li className="mb-2">About the Meetup</li>
                <li className="mb-2">Speakers</li>
                <li className="mb-2">Gallery</li>
                <li className="mb-2">Testimonials</li>
                <li className="mb-2">Register</li>
                <li className="mb-2">Contact</li>
              </ul>
            </Col>

            {/* Contact */}
            <Col lg={4} md={12}>
              <h4 className="fw-bold text-primary mb-3">
                Contact & Info
              </h4>

              <p>
                <strong>Location:</strong><br />
                Atibyan Tech Academy, Lagos, Nigeria.
              </p>

              <p>
                <strong>Schedule:</strong><br />
                Every Last Saturday of the Month
              </p>

              <p>
                <strong>Email:</strong><br />
                info@atibyan.com
              </p>

              <p>
                <strong>Phone:</strong><br />
                +234 XXX XXX XXXX
              </p>
            </Col>

          </Row>

          {/* Bottom Footer */}
          <Row className="mt-5 pt-4 border-top border-secondary text-center">
            <Col md={6} className="mb-2">
              <p className="mb-0">
                © 2026 Atibyan Tech Academy. All rights reserved.
              </p>
            </Col>

            <Col md={6}>
              <p className="mb-0 text-info">
                Designed for growth, learning, and real-world tech exposure.
              </p>
            </Col>
          </Row>

        </Container>
      </Container>
    </footer>
  );
};

export default Footer;