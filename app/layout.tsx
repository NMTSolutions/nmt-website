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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
