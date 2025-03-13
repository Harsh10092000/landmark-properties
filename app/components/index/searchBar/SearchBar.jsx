"use client";
import React from "react";
import "./SearchBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="row">
            <div className="col-md-2">
        <select className="form-select dropdown">
          <option>All Properties</option>
          <option>Apartments</option>
          <option>Houses</option>
          <option>Condos</option>
          <option>Villas</option>
        </select>
        </div>
        <div className="col-md-2">
        <select className="form-select dropdown">
          <option>Property Types</option>
          <option>For Sale</option>
          <option>For Rent</option>
          <option>Commercial</option>
        </select>
        </div>
        <div className="col-md-6">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Kurukshetra"
        />
</div>
<div className="col-md-2">
        <button className="btn btn-primary search-button">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          Search
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;