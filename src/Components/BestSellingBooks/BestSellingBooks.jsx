import React from "react";

import "./BestSellingBooks.css";
import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";

// image import
import treeSell from "../../assets/treeShape.png";

// import data
import { sellingBooksData } from "../../Data/Data";
import { Link } from "react-router-dom";
// import react icons
import { BsArrowRight } from "react-icons/bs";

export default function BestSellingBooks() {
  return (
    <section className="BestSellingBook">
      {/* --------------------selling book tree shape------------------ */}
      <div className="treeShape">
        <img src={treeSell} alt="" />
      </div>

      {/* ---------------------selling book context------------------ */}
      {sellingBooksData.map(
        ({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }, index) => {
          return (
            <div className="container bestselling-container">
              {/* ------------------left -------------------- */}
              <div className="selling-book-left">
                <img src={img} alt="" />
              </div>

              {/* -----------------------right-------------------- */}
              <div className="selling-book-right">
                <TitleTypeTwo
                  Title={"Best Selling Books"}
                  className="sellingBookTitle"
                />
                <div>
                  <small>{infoTitleTop}</small>
                </div>
                <h3>{infoTitle}</h3>
                <p>{desc}</p>
                <h5>
                  <span>{price}</span>
                </h5>
                <Link to={shopbtnLink} className="btn">
                  <small>Shop it now</small>
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}
