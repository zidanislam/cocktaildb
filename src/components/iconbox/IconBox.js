import React from "react";

const IconBox = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="text-center row">
        <div className="col-md-4 my-auto p-5 g-3 position-relative category">
          <img src="https://i.ibb.co/thHc5F7/glass.png" className="w-50" alt="" />
          <h2>Browse</h2>
          <p>
            Luxury Wine is commited to producing estate grown wines. Welcome to our website!
          </p>
        </div>
        <img src="https://i.ibb.co/xmSN7WC/bg-5.jpg" className="col-md-4 p-0" alt="" />
        <div className="col-md-4 my-auto p-5 g-3 position-relative category">
          <img
            src="https://i.ibb.co/Mhh3hWH/grape.png" className="w-50"
            alt=""
          />
          <h2>See Ingredients</h2>
          <p>
            For the wine to become a premium quality we use only the best estate
            grown grapes.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <img src="https://i.ibb.co/JkPN4Ng/bg-6.jpg" className="col-md-4 p-0" alt="" />
        <div className="col-md-4 my-auto p-5 g-3  position-relative category">
          <img
            src="https://i.ibb.co/hyrvT1T/logo3.png" className="w-50"
            alt=""
          />
          <h2>Create Greatness</h2>
          <p>
            We are more than 100 different wines, of which 20% to 30% are
            reserve wines specially selected for you
          </p>
        </div>
        <img className="col-md-4 p-0"
          src="https://i.ibb.co/hYqPsdF/promo-3.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default IconBox;
