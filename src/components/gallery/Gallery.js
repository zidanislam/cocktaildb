import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Gallery = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="g-3">
          <Row className="mb-4">
            <img
              src="https://i.ibb.co/LYMtnjX/h4-banner-1n-scaled.jpg"
              className="w-100"
              alt=""
            />
          </Row>
          <Row>
            <img
              src="https://i.ibb.co/64s5q6R/ordinary-drink.jpg"
              className="w-100"
              alt=""
            />
          </Row>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="g-3">
          <Row className="mb-1">
            <img
              src="https://i.ibb.co/kMDjCqb/h4-banner-3n.jpg"
              className="w-100"
              alt=""
            />
          </Row>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6} className="g-3">
              <img
                src="https://i.ibb.co/m9QFvGH/blog-list-6.jpg"
                className="w-md-25 w-100"
                alt=""
              />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="g-3">
              <img
                src="https://i.ibb.co/JHsrFjL/blog-list-8.jpg"
                className="w-md-25 w-100"
                alt=""
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
