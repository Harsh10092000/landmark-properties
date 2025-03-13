

"use client";
import React from "react";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import './PropertyCard2.scss';

const PropertyCard2 = ({ col = 4, padding = '' }) => {
  const formatString = (str) => str.toLowerCase().replace(/ /g, "-");
  const baseUrl = process.env.NEXT_PUBLIC_WEB_URL || "https://fallbackdomain.com";

  // Dummy Data
  const dummyData = [
    {
      pro_url: "luxury-villa-in-mumbai",
      img_link: "villa1.jpg",
      pro_views: 245,
      pro_type: "Villa,Residential",
      pro_bedroom: 4,
      pro_washrooms: 3,
      pro_parking: 2,
      pro_locality: "Bandra",
      pro_city: "Mumbai",
      pro_amt: 25000000,
      pro_amt_unit: "Cr",
      pro_area_size: 3500,
      pro_area_size_unit: "sqft",
      pro_user_type: "Owner",
      pro_creation_date: "2025-02-15T10:00:00Z",
      pro_furnishing: "Fully Furnished",
      pro_rental_status: "No",
      pro_possession: "Immediate"
    },
    {
      pro_url: "apartment-in-delhi",
      img_link: "apartment1.jpg",
      pro_views: 180,
      pro_type: "Apartment,Residential",
      pro_bedroom: 3,
      pro_washrooms: 2,
      pro_parking: 1,
      pro_locality: "Saket",
      pro_city: "Delhi",
      pro_amt: 15000000,
      pro_amt_unit: "Lakh",
      pro_area_size: 1800,
      pro_area_size_unit: "sqft",
      pro_user_type: "Broker",
      pro_creation_date: "2025-03-01T14:30:00Z",
      pro_furnishing: "Semi Furnished",
      pro_rental_status: "Yes",
      pro_possession: "6 Months"
    }
  ];

  return (
    <section className="property-grid">
      <div className="container">
        <h2 className="section-title">Explore Properties</h2>
        <div className="row">
          {dummyData.map((item, index) => (
            <div className={`col-md-${col} mb-4 ${padding}`} key={index}>
              <div className="property-card">
                <div className="card-image">
                  <Link href={`/${item.pro_url}`}>
                    <img
                    //   src={item.img_link ? `${baseUrl}/propertyImages/watermark/${item.img_link}` : "/images/default4.webp"}
                    src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt={`${item.pro_type.split(",")[0]} in ${item.pro_city}`}
                      width={300}
                      height={180}
                      className="property-img"
                      loading="lazy"
                    />
                  </Link>
                  <div className="image-overlay">
                    {item.pro_views > 0 && (
                      <span className="views">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        {item.pro_views}
                      </span>
                    )}
                    <span className="status">
                      {item.pro_furnishing === "Fully Furnished" && item.pro_rental_status === "No" && item.pro_possession === "Immediate" 
                        ? "Ready to Move" 
                        : item.pro_furnishing === "Fully Furnished" 
                          ? "Furnished" 
                          : "Available"}
                    </span>
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">
                    <Link href={`/${item.pro_url}`}>{item.pro_type.split(",")[0]}</Link>
                  </h3>
                  <p className="location">{item.pro_locality}, {item.pro_city}</p>
                  <div className="details">
                    <span className="price">₹{item.pro_amt / 10000000} {item.pro_amt_unit}</span>
                    <span className="size">{item.pro_area_size} {item.pro_area_size_unit}</span>
                  </div>
                  {item.pro_type.split(",")[1] !== "Land" && (
                    <div className="features">
                      <span>{item.pro_bedroom} <small>Bed</small></span>
                      <span>{item.pro_washrooms} <small>Bath</small></span>
                      <span>{item.pro_parking} <small>Parking</small></span>
                    </div>
                  )}
                  <div className="card-footer">
                    <span className="listed-by">By {item.pro_user_type} • {moment(item.pro_creation_date).fromNow()}</span>
                    <Link href={`/${item.pro_url}`} className="view-btn">View</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCard2;