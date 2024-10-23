import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div>
        <div>
          {" "}
          <img
            src="/assests/AAJ-Logo-in-without-tagline-8-1-2.png"
            alt="logo"
            className="w-[151px] h-[30px]"
            //   height="30"
          />
          <p>
            Optimizing supply chains through <br />
            warehousing and transportation services
          </p>
        </div>{" "}
        <div>
          <span>
            <FontAwesomeIcon icon={faline} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
