import React from "react";
import "./Banner.css";
import gift from "../../../../assets/images/gift-box.png";
import PrimaryButton from "../../../../components/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: ``,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={gift} className="rounded-lg shadow-2xl lg:w-1/2" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Best Gift In The Town!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
