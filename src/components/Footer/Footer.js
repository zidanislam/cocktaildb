import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex justify-content-between align-items-center">
        <img
          src="https://i.ibb.co/23RDfKR/footer-logo.png"
          width="200"
          height="200"
          className="ps-3 mb-5"
          alt=""
        />
        <div className="d-flex gap-4 pe-5">
        <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
        <FontAwesomeIcon icon={faAt} size="2xl" />
        <FontAwesomeIcon icon={faInstagram} size="2xl" />
        </div>
      </div>
      <div className=" d-flex justify-content-start gap-5 ps-5 fs-5 fw-medium">
        <p className="pb-0 mb-0">About Us</p>
        <p className="pb-0 mb-0">Contact Us</p>
        <p className="pb-0 mb-0">Cocktails</p>
      </div>
      <hr width="93%" className="mx-auto" />
      <div className="d-flex justify-content-between px-5">
        <div className="d-flex gap-5">
          <p className="">Term & Conditions</p>
          <p className="">Privecy Policy</p>
        </div>
        <p className="">Made By Zidan Islam 2023</p>
      </div>
    </div>
  );
};

export default Footer;
