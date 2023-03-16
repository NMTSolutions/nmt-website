import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Banner/Banner";
import OurExpertise from "@/components/OurExpertise/OurExpertise";
import UpcomingProducts from "@/components/UpcomingProducts/UpcomingProducts";
import Technologies from "@/components/Technologies/Technologies";
import Contactus from "@/components/ContactUs/Contactus";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Banner />
      <OurExpertise />
      <UpcomingProducts />
      <Technologies />
      <Contactus />
      {/* <Footer /> */}
    </>
  );
}
