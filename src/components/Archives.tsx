import React from "react";
import "../styles/components/Archives.scss";

function Archives() {
  const arr = [
    "March 2014",
    "February 2014",
    "January 2019",
    "December 2003",
    "July 2005",
    "November 2011",
    "February 2012",
    "January 2004",
    "December 2005",
    "July 2015",
    "November 2012",
    "June 2020",
  ];

  return (
    <div className="archive-container">
      <h2>Archives</h2>
      {arr.map((item) => {
        return (
          <a href="">
            <div>{item}</div>
          </a>
        );
      })}
    </div>
  );
}

export default Archives;
