import {
  faInstagram,
  faLinkedin,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  const footerData = {
    company: {
      title: "Company",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Careers at AAJ", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
    services: {
      title: "Services",
      links: [
        { name: "E Commerce Fulfillment", href: "#" },
        { name: "Transport-AAJ Swift", href: "#" },
        { name: "Returns Management", href: "#" },
        { name: "Value Added Services", href: "#" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "#" },
        { name: "Blogs", href: "#" },
      ],
    },
    support: {
      title: "Support",
      links: [{ name: "Track Your Order", href: "#" }],
    },
    transportation: {
      title: "Transportation Network",
      links: [
        { name: "Transportation in Mumbai", href: "#" },
        { name: "Transportation in Bangalore", href: "#" },
        { name: "Transportation in Delhi", href: "#" },
        { name: "Transportation in Hyderabad", href: "#" },
        { name: "Transportation in Ghaziabad", href: "#" },
        { name: "Transportation in Sonipat NCR", href: "#" },
      ],
    },
  };

  return (
    <footer className="w-full">
      <div className="container mx-auto flex items-center justify-between pb-6 border-b border-[#C6BBBB]">
        <div className="flex gap-16">
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
        </div>
        <div className="space-x-6">
          <SocialButton icon={faLinkedin} />
          <SocialButton icon={faInstagram} />
          <SocialButton icon={faYoutube} />
        </div>
      </div>

      <div className=" py-12 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {Object.entries(footerData).map(([key, section]) => (
            <div key={key} className="space-y-5">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-base text-gray-600 hover:text-blue-600"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t pt-8 flex justify-between">
          <p className="text-center text-sm text-gray-500">
            © 2024 AAJ Swift. All Rights Reserved
          </p>
          <p className="text-center text-sm text-gray-500">
            ISO 9001: 2015, ISO 27001: 2013 Certified Company &nbsp; | &nbsp;
            CIN: L63090DL2011PLC221234
          </p>
        </div>
      </div>
    </footer>
  );
};

function SocialButton({ icon }: { icon: IconDefinition }) {
  return (
    <button className="btn btn-circle bg-transparent p-3 rounded-full border border-[#C6BBBB]">
      <FontAwesomeIcon className="text-2xl" icon={icon} />
    </button>
  );
}

export default Footer;
