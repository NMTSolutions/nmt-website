import Link from "next/link";
import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms">Terms</Link>
      </section>
      <section>Copyright © 2023 Nano Macro Technological Solutions</section>
      <section>
        <Link href="#">Facebook</Link>
        <Link href="#">Twitter</Link>
        <Link href="#">LinkedIn</Link>
        <Link href="#">Youtube</Link>
      </section>
    </footer>
  );
};

export default Footer;
