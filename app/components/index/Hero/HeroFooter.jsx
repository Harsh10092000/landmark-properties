"use client";
import React from "react";
import Link from "next/link";
import "./HeroFooter.scss";

const HeroFooter = () => {
  const options = [
    { label: "Commercial", href: "/commercial" },
    { label: "Land/Plots", href: "/land-plots" },
    { label: "Residential", href: "/residential" },
    { label: "List Property", href: "/list-property" },
    // { label: "Residential", href: "/residential" },
    // { label: "Land/Plots", href: "/list-property" },
    // { label: "Rent", href: "/Rent" },
  ];

  return (
    <div className="hero-footer-wrapper">
      <div className="hero-footer">
        <div className="left-border"></div>
        <div className="hero-footer-heading">I'm here to</div>
        <div className="hero-footer-options">
          {options.map((option, index) => (
            <Link key={index} href={option.href} passHref legacyBehavior>
              <a className="footer-option" aria-label={`Navigate to ${option.label}`}>
                {option.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;