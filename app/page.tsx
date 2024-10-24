import Image from "next/image";
import Hero from "./components/Hero";
import CtaSection from "./components/CtaSection";
import DataCount from "./components/DataCount";
import CustomerReviews from "./components/CustomerReviews";
import CtaBanner from "./components/CtaBanner";
import Button from "./components/common/Button";
import WhyAaj from "./components/WhyAaj";
import PanIndia from "./components/PanIndia";
import SvgComponent from "./components/process";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import BlogSection from "./components/Blogs";

export default function Home() {
  return (
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
  );
}
