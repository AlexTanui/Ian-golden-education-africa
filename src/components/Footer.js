import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome, FaComments, FaPhone, FaBook, FaUsers, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#E3EDED', padding: '20px', marginTop: '30px' }}>
      <Container>
        <Row className="text-center">
          <Col>
            <a href="/" className="footer-link"><FaHome /> Home</a>
          </Col>
          <Col>
            <a href="/discussion" className="footer-link"><FaComments /> Discussion</a>
          </Col>
          <Col>
            <a href="/contact" className="footer-link"><FaPhone /> Contact</a>
          </Col>
          <Col>
            <a href="/courses" className="footer-link"><FaBook /> Courses</a>
          </Col>
          <Col>
            <a href="/about-us" className="footer-link"><FaUsers /> About Us</a>
          </Col>
        </Row>

        <Row className="mt-3 justify-content-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebookSquare className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitterSquare className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagramSquare className="social-icon" />
          </a>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
