import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../assets/register.jpg"
const Register = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image})`,
         
        backgroundSize: "cover",
        backgroundPosition: "center",
        Height: "769px",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          width: "100%",
          padding: "6rem 0",
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1
                style={{
                  color: "white",
                  fontSize: "3rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                What Are You Waiting For?
              </h1>

              <p
                style={{
                  color: "#ddd",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "2rem",
                }}
              >
                Join Atibyan Tech Meetup and connect with developers,
                designers, innovators, and tech enthusiasts from different
                backgrounds.
              </p>

              <a
                href="#"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "14px 35px",
                  borderRadius: "50px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
              >
                Register Now
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Register;