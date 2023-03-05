"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Button from "../Button/Button";
import NMTLogo from "@/assets/logo/nmt-logo-transparent.png";
import Link from "next/link";

import "./navbar.css";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="nav-heading">
        <Image src={NMTLogo} alt="NMT Solution" priority />
      </div>
      <div className="nav-tabs">
        <Button variant="text" isActive={pathname === "/"}>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="text" isActive={pathname === "/about-us"}>
          <Link href="/about-us">About us</Link>
        </Button>
        <Button variant="text">
          <a href="/#our-expertise">Services</a>
        </Button>
        <Button variant="text" isActive={pathname === "/technologies"}>
          <a href="/technologies">Technologies</a>
        </Button>
        <Button variant="text">
          <a href="/#contact-us">Contact</a>
        </Button>
      </div>
      <div className="nav-account-actions">
        <Button variant="text">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
};

export default NavBar;
