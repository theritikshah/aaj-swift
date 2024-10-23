import React, { ReactNode } from "react";

type Props = {
  heading: ReactNode;
  children: ReactNode;
  imgUrl: string;
};

const CtaBanner = ({ heading, children, imgUrl }: Props) => {
  return (
    <div className="pt-16 mb-16">
      <div
        className="flex container overflow-hidden mx-auto flex-col rounded-2xl h-auto gap-6 p-12 !bg-right"
        style={{
          background: `linear-gradient(90deg, #C2202B 43.6%, rgba(194, 32, 43, 0.00) 100%),url(${imgUrl})`,
        }}
      >
        <h3 className="text-4xl text-white font-semibold">{heading}</h3>
        <div className="flex gap-6"> {children}</div>
      </div>
    </div>
  );
};

export default CtaBanner;
