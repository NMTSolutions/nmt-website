"use client";

import React from "react";
import Button from "../Button/Button";

const BannerActions = () => {
  return (
    <div className="banner-actions">
      <Button>Subscribe</Button>
      <Button variant="outlined">Demo</Button>
    </div>
  );
};

export default BannerActions;
