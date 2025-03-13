import React from 'react';
import './AboutUs.scss';

const FeatureItem = ({ iconSrc, title, description, altText }) => (
  <div className="feature-item">
    <div className="feature-icon-wrapper">
      <img
        src={iconSrc}
        className="feature-icon"
        alt={altText}
        loading="lazy"
        width="50"
        height="50"
      />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const AboutUs = () => {
  const features = [
    {
      iconSrc: "https://img.icons8.com/ios/50/ffffff/search-property.png",
      title: "Smart Matching",
      description: "Connect instantly with verified buyers or sellers.",
      altText: "Search property icon"
    },
    {
      iconSrc: "https://img.icons8.com/ios/50/ffffff/real-estate.png",
      title: "Free Listings",
      description: "Showcase properties at no cost with premium exposure.",
      altText: "Real estate icon"
    },
    {
      iconSrc: "https://img.icons8.com/ios/50/ffffff/3d-property.png",
      title: "3D Tours",
      description: "Explore or showcase properties with virtual tours.",
      altText: "3D property icon"
    },
    {
      iconSrc: "https://img.icons8.com/ios/50/ffffff/handshake.png",
      title: "Direct Access",
      description: "Reach authenticated parties effortlessly.",
      altText: "Handshake icon"
    }
  ];

  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-content">
          <div className="text-content">
            <h2 className="section-title">
              Discover Propertyease
              <span className="title-accent"></span>
            </h2>
            <p className="section-description">
              Since 2023, we've been revolutionizing real estate with cutting-edge
              technology and a seamless platform for buyers and sellers.
            </p>
            <div className="features-container">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
            <a href="/about" className="learn-more-btn">
              Learn More
            </a>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern property showcase"
                loading="lazy"
                width="500"
                height="400"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;