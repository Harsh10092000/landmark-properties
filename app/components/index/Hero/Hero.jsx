import React from "react";
import "./Hero.scss";

// Urbanist
const Hero = () => {

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <p>
            <span className="hero-tag-line">
            <span className="hero-tag-line-icon">🎉 </span> More than 1000+ house avaiable for sell & rent in country
            </span>
          </p>
          <h1>
            Kick off with a bang <br />with  <span className="font-hero">SaaS Starter</span>{" "}
          </h1>
         <div className="hero-tag-line-2-wrapper">
         <p className="hero-tag-line-2">Build your next project using Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui, Stripe.</p>
        </div> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
