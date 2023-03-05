"use client";
import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import NMTLogo from "@/assets/logo/nmt-logo-transparent.png";
import Link from "next/link";

import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-heading">
        <Image src={NMTLogo} alt="NMT Solution" priority />
      </div>
      <div className="nav-tabs">
        <Button variant="text">
          <Link href="/">Home</Link>
        </Button>
        <Button variant="text">About us</Button>
        <Button variant="text">
          <a href="#our-expertise">Services</a>
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
