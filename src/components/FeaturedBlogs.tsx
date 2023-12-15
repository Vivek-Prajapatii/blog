import React from "react";
import "../styles/components/FeaturedBlogs.scss";

function FeaturedBlogs() {
  return (
    <div className="featured-blogs-container">
      <div className="blog-card">
        <div className="description">
          <h3>World</h3>
          <h2>Economy</h2>
          <span>Nov 2023</span>
          <p>
            Hosting countries need more international assistance—but we also
            need others to step in: businesses, foundations, cities, NGOs, and
            advocates. We need to support private sector investment because
            economic inclusion and job creation provide the surest path to
            sustainability.
          </p>
          <h4>Continue reading....</h4>
        </div>
        <div className="thumbnail">
          <img
            src="https://www.cia.gov/the-world-factbook/static/778a257ec6e116fbb7aac018c170b3eb/14b42/wfb-feature-world.jpg"
            alt="world"
          ></img>
        </div>
      </div>
      <div className="blog-card">
        <div className="description">
          <h3>Design</h3>
          <h2>Explore Best Designs</h2>
          <span>May 2020</span>
          <p>
            Every person inherits something from his parents but the series of
            traditions, values, and preferences that transfer from one
            generation to another is what constitutes culture.
          </p>
          <h4>Continue reading....</h4>
        </div>
        <div className="thumbnail">
          <img
            src="https://e7.pngegg.com/pngimages/452/882/png-clipart-business-card-design-graphic-design-paint-design-poster-interior-design-services.png"
            alt="world"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBlogs;
