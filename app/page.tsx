import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import AppDevGraphic from "@/assets/svg/mobile-development.svg";
import BannerActions from "@/components/BannerActions/BannerActions";
import Footer from "@/components/Footer/Footer";
import Contactus from "@/components/ContactUs/Contactus";

export default function Home() {
  return (
    <main className="container no-scrollbar">
      <NavBar />
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
      <Contactus />
      <Footer />
    </main>
  );
}
