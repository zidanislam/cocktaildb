import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const IconBox = () => {
  return (
    <Container className="mx-auto my-5">
      <Row className="text-center">
        <Col md={4} sm={6} className="my-auto p-5 g-3 position-relative order-md-1 order-sm-1 category">
          <img
            src="https://i.ibb.co/thHc5F7/glass.png"
            className="w-50"
            alt=""
          />
          <h2>Browse</h2>
          <p>
            Luxury Wine is commited to producing estate grown wines. Welcome to
            our website!
          </p>
        </Col>
        <img
          src="https://i.ibb.co/xmSN7WC/bg-5.jpg"
          className="col-md-4 col-sm-6 order-md-2 order-sm-2 p-0"
          alt=""
        />
        <Col md={4} sm={6} className="my-auto p-5 g-3 position-relative order-md-3 order-sm-4 category">
          <img
            src="https://i.ibb.co/Mhh3hWH/grape.png"
            className="w-50"
            alt=""
          />
          <h2>See Ingredients</h2>
          <p>
            For the wine to become a premium quality we use only the best estate
            grown grapes.
          </p>
        </Col>
        <img
          src="https://i.ibb.co/JkPN4Ng/bg-6.jpg"
          className="col-md-4 col-sm-6 order-md-4 order-sm-3 p-0"
          alt=""
        />
        <Col md={4} sm={6} className="my-auto p-5 g-3 position-relative order-md-5 order-sm-4 category">
          <img
            src="https://i.ibb.co/hyrvT1T/logo3.png"
            className="w-50"
            alt=""
          />
          <h2>Create Greatness</h2>
          <p>
            We are more than 100 different wines, of which 20% to 30% are
            reserve wines specially selected for you
          </p>
        </Col>
        <img
          className="col-md-4 col-sm-6 order-md-5 order-sm-4 p-0"
          src="https://i.ibb.co/hYqPsdF/promo-3.jpg"
          alt=""
        />
      </Row>
    </Container>
  );
};

export default IconBox;
