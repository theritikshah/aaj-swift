import React from "react";

const data = [
  {
    icon: "/assests/icons/1.png",
    title: "Guaranteed on time delivery with money back guarantee",
  },
  {
    icon: "/assests/icons/2.png",
    title:
      "Lowest Transportation Cost: Through economies of scale and right transporters mix",
  },
  {
    icon: "/assests/icons/3.png",
    title: "In transit insurance cover",
  },
  {
    icon: "/assests/icons/4.png",
    title:
      "Live Shipment Tracking: Keep tabs on your shipments from pickup to delivery",
  },
  {
    icon: "/assests/icons/5.png",
    title:
      "Efficient Documentation: Anytime access all Proof of Deliveries (PODs)",
  },
  {
    icon: "/assests/icons/6.png",
    title: "Fast customer Support",
  },
];

const WhyAaj = () => {
  return (
    <div className="w-full pb-16">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-4xl font-semibold  leading-snug">
            AAJ Swift Stands Out as Your Go-To Transport <br />
            Company in Delhi
          </h2>
          <p className="text-center">
            We Seamlessly Move Your Goods from Pickup to Delivery Providing
            End-to-End Transportation Solutions.
          </p>
        </div>
        <div className="w-full items-center justify-center grid grid-cols-3 gap-6 ">
          {data.map((details: any) => {
            return <DataCard img={details.icon} label={details.title} />;
          })}
        </div>
      </div>
    </div>
  );
  // git fix
};

export default WhyAaj;

function DataCard({ img, label }: any) {
  return (
    <div className="flex flex-col hover:text-white   w-full h-full gap-4 p-6  bg-lightRed hover:bg-black  rounded-xl">
      <img src={img} alt="" className="w-[50px] h-auto " />
      <p className="">{label}</p>
    </div>
  );
}
