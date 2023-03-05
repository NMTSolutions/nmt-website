import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Banner/Banner";
import OurExpertise from "@/components/OurExpertise/OurExpertise";
import UpcomingProducts from "@/components/UpcomingProducts/UpcomingProducts";
import Contactus from "@/components/ContactUs/Contactus";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="container no-scrollbar">
      <div className="sub-container">
        <NavBar />
        <Banner />
        <OurExpertise />
        <UpcomingProducts />
        <Contactus />
        <Footer />
      </div>
    </main>
  );
}
