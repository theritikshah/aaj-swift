import React from "react";
import Button from "../common/Button";

const CtaSection = () => {
  return (
    <div className="flex container mx-auto flex-col py-12 gap-9">
      <h2 className="text-4xl font-semibold text-center leading-snug">
        Elevate Your Business with AAJ Swift, Most Reliable <br /> Transport
        Company in Delhi
      </h2>
      <div className="flex gap-20">
        <img src="/assests/aaj-cta-section.png" alt="" />
        <div className="flex flex-col gap-9 pt-8">
          <p className="max-w-[520px]">
            AAJ Swift is a transportation company that focuses on providing
            reliable, cost-effective, and technology-driven transportation
            solutions for B2B enterprises in India, with a strong emphasis on
            part load transportation (PTL).
          </p>
          <Button className="btn-wide">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
