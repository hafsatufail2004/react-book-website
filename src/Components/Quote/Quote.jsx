import React from "react";
import "./Quote.css";

import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";

// import data
import { quoteData } from "../../Data/Data";

export default function Quote() {
  return (
    <section className="Quote">
      <div className="container quote-container">
        <TitleTypeTwo Title={"Quote of the day"} ClassName="quote-title" />

        {quoteData.map(({ quote, speaker }, index) => {
          return (
            <article key={index}>
              <p>{quote}</p>
              <h5>{speaker}</h5>
            </article>
          );
        })}
      </div>
    </section>
  );
}
