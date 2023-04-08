import React from "react";

const Review = ({ reviews }) => {
  const { name, photo, location, details } = reviews;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{details}</p>
        <div className="flex items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={photo} alt="" />
            </div>
          </div>
          <div>
          <h5 className="text-xl">{name}</h5>
          <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
