import React from "react";
import "./contact-us.css";

const Contactus = () => {
  return (
      <div className="d-flex gap-sm-5 gap-3 my-5 contact-us">
        <div className="my-auto order-2 pe-sm-5 pe-3 py-lg-0 py-sm-5 py-3">
          <h4 className="fst-italic fs-4 fw-light mb-sm-5">Get in Touch</h4>
          <h2 className="fs-1 fw-semibold mb-sm-4">Contacts</h2>
          <p>
            We offer a great variety for every price point and any occasion,
            from rich shardonnay to creamy brut.
          </p>
          <p>Phone: +125 256 36 85</p>
          <p>E-mail: office@luxurywine.com</p>
          <button className="fs-sm-5 fs-6">Contact Us</button>
        </div>
        <img src="https://i.ibb.co/ZKJz7QC/promo-2.jpg" alt="img" className="w-50 order-1" />
      </div>
  );
};

export default Contactus;
