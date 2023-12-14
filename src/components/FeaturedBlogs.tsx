import React from "react";
import "../styles/components/FeaturedBlogs.scss";

function FeaturedBlogs() {
  return (
    <div className="featured-blogs-container">
      <div className="blog-card">
        <div className="description">
          <h2>Featured Post</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            repellat, placeat odit pariatur laudantium libero fuga deserunt
            nulla voluptas sint facilis ipsa ab delectus perferendis! Tenetur
            maxime magni aperiam? Quos?
          </p>
          <h4>Continue reading....</h4>
        </div>
        <div className="thumbnail"></div>
      </div>
      <div className="blog-card">
        <div className="description">
          <h2>Featured Post</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            repellat, placeat odit pariatur laudantium libero fuga deserunt
            nulla voluptas sint facilis ipsa ab delectus perferendis! Tenetur
            maxime magni aperiam? Quos?
          </p>
          <h4>Continue reading....</h4>
        </div>
        <div className="thumbnail"></div>
      </div>
    </div>
  );
}

export default FeaturedBlogs;
