
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import GiftCard from "./GiftCard";

const Allgifts = () => {
  

  

  return (
    <div className="mt-20">
      <h2 className="text-4xl pb-2 text-center font-bold text-white">Brands</h2>
      <div className="grid grid-cols-3">
          <GiftCard></GiftCard>
      </div>
    </div>
  );
};

export default Allgifts;
