import Image from "next/image";
import BannerActions from "../BannerActions/BannerActions";
import AppDevGraphic from "@/assets/svg/mobile-development.svg";

import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-heading">
        <div>
          Application Development
          <br /> and Server Integration
        </div>
        <div>
          Focus on your business.
          <br />
          Application development and maintenance is our responsibility.
        </div>
        <BannerActions />
      </div>
      <div className="banner-graphic">
        <Image src={AppDevGraphic} alt="Application graphics" priority />
      </div>
    </section>
  );
};

export default Banner;
