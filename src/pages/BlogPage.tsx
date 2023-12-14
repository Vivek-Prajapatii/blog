import React from "react";
import "../styles/pages/BlogPage.scss";
import SignupBar from "../components/SignupBar";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Blogs from "../components/Blogs";
import About from "../components/About";
import Archives from "../components/Archives";
import ElseWhere from "../components/ElseWhere";

function BlogPage() {
  return (
    <div className="blog-page-container">
      <SignupBar />
      <NavBar />
      <Banner />
      <FeaturedBlogs />

      <div className="blogs-and-about">
        <div className="blogs">
          <Blogs />
        </div>

        <div className="about">
          <About />
          <Archives />
          <ElseWhere />
        </div>
              
      </div>
    </div>
  );
}

export default BlogPage;
