import Image from "next/image";
import React from "react";

const PanIndia = () => {
  return (
    <div className="w-full">
      <div className=" container mx-auto flex gap-16 ms-auto h-[661px]">
        <div className="relative flex w-1/2 h-full ">
          <img src="/assests/map.png" alt="" className="w-full h-auto " />
        </div>
        <div className="flex w-1/2 h-full flex-1 flex-col gap-6 justify-center ">
          <h2 className=" text-4xl font-semibold  leading-snug">
            Pan-India Reach for Your Business Success
          </h2>
          <p className="font-medium">
            Send Shipments from Delhi to Every Corner of India with Our Reliable
            Transportation Service
          </p>
          <p>
            We take pride in offering a vast coverage area to ensure your goods
            reach their destination seamlessly. Our extensive transport service
            in Delhi delivers across India, allowing your business to connect
            hassle-free with customers and partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanIndia;
