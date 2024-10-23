import React from "react";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faWeight,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div
      className="relative !bg-cover !bg-center bg-black/50 !bg-no-repeat w-full  pt-20 overflow-hidden"
      style={{ background: "url(/assests/hero-bg.jpg)" }}
    >
      <div
        className="absolute bg-black/25 z-0  w-full h-full top-0 left-0"
        style={{
          background:
            "linearGradient(270deg, rgba(0, 0, 0, 0.75) 100%,, rgba(0, 0, 0, 0.00) 0%)",
        }}
      ></div>
      <div className="relative container   mx-auto flex justify-between ">
        <div className="flex flex-col gap-6 mt-4">
          <h1 className="text-5xl font-semibold text-white">
            Pan India Transportation <br /> Service from Delhi NCR
          </h1>
          <p className="text-white">
            Transport Solution for Your Business with Reliable <br /> and
            Cost-Effective Transportation Service in Delhi.
          </p>
        </div>
        <div className="flex flex-col bg-black p-9 pb-24 rounded-r-md rounded-l-md gap-9">
          <div className="flex flex-col gap-2">
            <h4 className="text-white  font-medium text-2xl">
              Pan India Transportation Service
            </h4>
            <p className="text-lg font-medium text-white text-center leading-tight">
              Pan India transportation with <br /> guaranteed on time delivery{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Weight" />

              <FontAwesomeIcon icon={faWeightHanging} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Pickup Pincode"
              />
              <FontAwesomeIcon icon={faLocationArrow} />
            </label>
          </div>
          <Button className="btn-block">Book Shipment</Button>
        </div>
      </div>
    </div>
  );
};

export default index;
