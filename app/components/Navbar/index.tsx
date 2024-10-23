"use client";

import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";

const Navbar = () => (
  <nav className="container py-3 items-center mx-auto justify-between flex bg-white ">
    <img
      src="/assests/AAJ-Logo-in-without-tagline-8-1-2.png"
      alt="logo"
      className="w-[151px] h-[30px]"
      //   height="30"
    />

    <ul className="text-black font-medium flex gap-12">
      <li>Company</li>
      <li>Calculate Shipping Cost</li>
      <li>Blogs</li>
      <li>Contact Us</li>
    </ul>

    <div>
      <button className="btn btn-link text-red">
        <FontAwesomeIcon icon={faLocationPin} /> Tract Shipment
      </button>
      <Button className="btn btn-primary bg-red text-white border-white hover:bg-red/85 hover:border-white">
        Login
      </Button>
    </div>
  </nav>
);

export default Navbar;
