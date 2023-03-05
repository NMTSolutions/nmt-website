"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import Button from "../Button/Button";
import NMTLogo from "@/assets/logo/nmt-logo.svg";
import Link from "next/link";
import Dialog from "../Dialog/Dialog";

import "./navbar.css";
import { useState } from "react";
import TextField from "../TextField/TextField";
import CheckboxInput from "../Input/CheckboxInput";
import RadioInput from "../Input/RadioInput";

const NavBar = () => {
  const [isSigninFormOpen, setSigninFormOpen] = useState(false);
  const [isSignupFormOpen, setSignupFormOpen] = useState(false);
  const pathname = usePathname();

  const openSigninForm = () => {
    setSigninFormOpen(true);
  };

  const closeSigninForm = () => {
    setSigninFormOpen(false);
  };

  const openSignupForm = () => {
    setSignupFormOpen(true);
  };

  const closeSignupForm = () => {
    setSignupFormOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-heading">
        <a href="/">
          <Image src={NMTLogo} alt="NMT Solution" priority />
        </a>
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
        <Button variant="text" onClick={openSigninForm}>
          Login
        </Button>
        <Button onClick={openSignupForm}>Sign Up</Button>
      </div>
      <Dialog
        open={isSigninFormOpen}
        heading="Login"
        content={
          <div className="signin-form">
            <div className="signin-form username">
              <TextField label="Username or Email" height="3rem" type="email" />
            </div>
            <div className="signin-form password">
              <TextField label="Password" height="3rem" type="password" />
            </div>
          </div>
        }
        action="Login"
        onClose={closeSigninForm}
        onCancel={closeSigninForm}
      />
      <Dialog
        open={isSignupFormOpen}
        heading="Register"
        content={
          <div className="signup-form">
            <div className="signup-form username">
              <TextField label="Full Name" height="3rem" type="text" />
              <TextField label="Username" height="3rem" type="text" />
            </div>
            <div className="signup-form email">
              <TextField label="Email" height="3rem" type="email" />
              <TextField label="Confirm Email" height="3rem" type="email" />
            </div>
            <div className="signup-form password">
              <TextField label="Password" height="3rem" type="email" />
              <TextField label="Confirm Password" height="3rem" type="email" />
            </div>
            <div className="dob">
              <TextField
                label="Date of Birth"
                type="text"
                onFocus={(event) => {
                  event.target.type = "date";
                }}
                onBlur={(event) => {
                  event.target.type = "text";
                }}
              />
            </div>
            <div className="terms">
              <CheckboxInput label="I accept the Terms & Conditions By Signing up." />
            </div>
          </div>
        }
        action="Register"
        onClose={closeSignupForm}
        onCancel={closeSignupForm}
      />
    </nav>
  );
};

export default NavBar;
