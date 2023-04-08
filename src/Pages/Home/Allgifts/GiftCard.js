import React from "react";
import { Link } from "react-router-dom";

const GiftCard = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="/../src/assets/images/iconbox-1.png" alt="gift" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"></h2>
          <div className="card-actions">
            <Link to="">
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
