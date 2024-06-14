// "use client";

import { useState } from "react";

import "./PopularBooks.css";
// import data--------------------------
import { galleryData } from "../../Data/Data";

import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

export default function PopularBooks() {
  // active button functionality-------------------------
  const [activeButton, setActiveButton] = useState("all");

  const handleFilterChange = (category) => {
    setActiveButton(category);
  };

  // Filter Gallery Functionality--------------------------
  const filterItems =
    activeButton === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeButton);
  return (
    <section className="PopularBook">
      <div className="container popularbooks-container">
        <TitleTypeOne
          TitleTop={"Some quality items"}
          Title={"Popular Books"}
          className={"popularbooks-title"}
        />
        {/* -----------------filter tabs button-------------------- */}
        <div className="filter-button">
          <button
            className={activeButton === "all" ? "active" : ""}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>

          <button
            className={activeButton === "Business" ? "active" : ""}
            onClick={() => handleFilterChange("Business")}
          >
            Business
          </button>

          <button
            className={activeButton === "Technology" ? "active" : ""}
            onClick={() => handleFilterChange("Technology")}
          >
            Technology
          </button>

          <button
            className={activeButton === "Adventure" ? "active" : ""}
            onClick={() => handleFilterChange("Adventure")}
          >
            Adventure
          </button>

          <button
            className={activeButton === "Romantic" ? "active" : ""}
            onClick={() => handleFilterChange("Romantic")}
          >
            Romantic
          </button>

          <button
            className={activeButton === "Fictional" ? "active" : ""}
            onClick={() => handleFilterChange("Fictional")}
          >
            Fictional
          </button>
        </div>
        {/* ---------------------------fillter book content------------------ */}
        <div className="gallery">
          {filterItems.map(({ name, writer, price, image }, index) => {
            return (
              <div className="gallery-items" key={index}>
                <div className="popularbook-image">
                  <img src={image} alt="image" />
                </div>
                <div className="popularbook-info">
                  <h4>{name}</h4>
                  <div>
                    <small>{writer}</small>
                  </div>
                  <h5>
                    <span>{price}</span>
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
