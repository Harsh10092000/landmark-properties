"use client"
import React from 'react';
import './Header.scss'; // Import the SCSS file (ensure it’s compiled to CSS if needed)
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Install Font Awesome
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faBuilding,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <header 
    className='header-section'
    // className={isScrolled ? 'header-section mb-5 new-navbar-wrapper' : 'header-section'}
    > 
      <div className="">
        <div className='d-flex justify-content-between'>
            <div>
            <img class="main__logo--img sticky__none" src="assets/img/logo/nav-log2.png" alt="logo-img" />
            </div>
            <div 
            // className='header-options' 
            className={isScrolled ? 'header-options mb-5 new-navbar-wrapper' : 'header-options'}>
                <div className='menu-item'><Link href="#"><FontAwesomeIcon icon={faHome} className="nav-icon" />Home</Link></div>
                <div className='menu-item'><Link href="#">About Us</Link></div>
                <div className='menu-item'><Link href="#">Rent</Link></div>
                <div className='menu-item'><Link href="#">Sale</Link></div>
                <div className='menu-item'><Link href="#">Contact Us</Link></div>
                <div className='menu-item'><Link href="#">All Properties</Link></div>
                <div className='menu-item'><Link href="#">Add Property</Link></div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;