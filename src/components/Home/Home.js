import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "../slider/Slider";
import "./Home.css";

const Home = (cocktail) => {
  const {strCategory} = cocktail
  return (
    <div>
      <div className="hero d-block w-100" alt="hero">
        <div className="color-overlay d-flex flex-column justify-content-center align-items-start ps-5">
          <h2 className="fs-1">Welcom to Cocktail-DB</h2>
          <p className="fs-5">
            Search by Cocktail Name and get to know more about the ingreditensts
          </p>
        </div>
      </div>
          <div className="d-flex align-items-center w-75">
            <Col className="col-6 gx-5" >
            <Row className="cat1 img my-4 d-flex flex-column justify-content-center align-items-start">
              <h2 className="title">Cocktail</h2>
            </Row>
            <Row className="cat2 img my-4 d-flex flex-column justify-content-center align-items-start">
            <h2 className=" title">Soda</h2>
            </Row>
            </Col>
            <Col className="col-6 ms-5">
            <Row className="cat3 img-single d-flex flex-column justify-content-center align-items-start" as={Link} to={`/items/${strCategory}`}>
              <h2 className="title">Alcohol</h2>
            </Row>
            </Col>
          </div>
      <Slider />
    </div>
  );
};

export default Home;
