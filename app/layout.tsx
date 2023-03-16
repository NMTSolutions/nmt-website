import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "NMT Solutions",
  description: "NMT Solutions",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container no-scrollbar">
          <div className="sub-container">
            <NavBar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
