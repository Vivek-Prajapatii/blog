import React from "react";
import "../styles/components/Archives.scss";

function Archives() {
  const arr = [0, 1, 2, 3, 4, 5];

  return (
    <div className="archive-container">
      <h2>Archives</h2>
      {arr.map((item) => {
        return (
          <a href="">
            <div>March 2014</div>
          </a>
        );
      })}
    </div>
  );
}

export default Archives;
