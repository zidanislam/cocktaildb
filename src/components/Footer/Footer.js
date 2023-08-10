import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="d-flex align-items-center mt-5 mb-3 w-75 m-auto subscribe">
        <input
          className="flex-grow-1 w-50"
          type="email"
          placeholder="Enter Your Email..."
        />
        <button className="py-sm-2.5 px-sm-5 px-4 py-1.5">Subscribe</button>
      </div>
      <div className="footer">
        <div className="d-flex align-items-center justify-content-center">
          <img
            src="https://i.ibb.co/BrXxFDW/footer-logo.png"
            width="200"
            height="200"
            alt=""
          />
        </div>
        <div className="d-lg-flex justify-content-between d-sm-block inner">
          <div className="d-flex gap-md-5 gap-3 ps-lg-5 my-lg-0 fs-5 fw-medium justify-content-lg-start justify-content-center my-3">
            <p className="pb-0 mb-0">About Us</p>
            <p className="pb-0 mb-0">Contact Us</p>
            <p className="pb-0 mb-0">Cocktails</p>
          </div>
          <div className="d-flex justify-content-lg-end gap-4 pe-lg-5 justify-content-center">
            <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
            <FontAwesomeIcon icon={faAt} size="2xl" />
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
          </div>
        </div>
        <hr width="93%" className="mx-auto" />
        <div className="d-flex justify-content-between px-md-5 px-2 gap-1">
          <div className="d-flex gap-lg-3 gap-5">
            <p>Term & Conditions</p>
            <p>Privecy Policy</p>
          </div>
          <p>Made By Zidan Islam 2023</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
