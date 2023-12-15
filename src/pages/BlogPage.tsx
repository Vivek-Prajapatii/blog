import React from "react";
import "../styles/pages/BlogPage.scss";
import Banner from "../components/Banner";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Blogs from "../components/Blogs";
import About from "../components/About";
import Archives from "../components/Archives";
import ElseWhere from "../components/ElseWhere";
import NavBar from "../components/header/NavBar";
import SignupBar from "../components/header/SignupBar";
import Footer from "../components/footer/Footer";

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
      <Footer />
    </div>
  );
}

export default BlogPage;
