import Head from "next/head";
import Image from "next/image";
import Hero from "./components/Hero";
import CtaSection from "./components/CtaSection";
import DataCount from "./components/DataCount";
import CustomerReviews from "./components/CustomerReviews";
import CtaBanner from "./components/CtaBanner";
import Button from "./components/common/Button";
import WhyAaj from "./components/WhyAaj";
import PanIndia from "./components/PanIndia";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import BlogSection from "./components/Blogs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAJ Swift | Logistics Solutions",
  description:
    "AAJ Swift provides reliable logistics solutions across India. Book regular consignments and explore our warehousing services.",
};

export default function Home() {
  return (
    <>
      {/* Meta Information for SEO */}

      {/* Main Content */}
      <div className="font-sans">
        <Hero />
        <CtaSection />
        <DataCount />
        <CustomerReviews />
        <CtaBanner
          imgUrl="/assests/aaj-cta-banner-work.png"
          heading={
            <>
              Have Regular Consignments to Book? <br />
              Become a Postpaid Client
            </>
          }
        >
          <Button className="btn-wide bg-white !text-red hover:bg-white hover:text-red">
            Contact sales
          </Button>
          <Button className="btn-wide bg-white !text-red hover:bg-white hover:text-red">
            Contact Support
          </Button>
        </CtaBanner>

        <WhyAaj />
        <PanIndia />

        {/* Uncomment if you want to use SvgComponent */}
        {/* <SvgComponent /> */}

        <BlogSection />

        <FAQ />

        <CtaBanner
          imgUrl="/assests/truck.png"
          heading={
            <>
              Have Regular Consignments to Book ?<br />
              Become a Postpaid Client
            </>
          }
        >
          <Button className="btn-wide bg-white !text-red hover:bg-white hover:text-red">
            Contact Us
          </Button>
        </CtaBanner>

        <Footer />
      </div>
    </>
  );
}
