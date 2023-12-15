import React, { useState, useEffect } from "react";
import "../styles/pages/BlogPage.scss";
import Banner from "../components/Banner";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Blogs from "../components/blogs/Blogs";
import About from "../components/about&archives/About";
import Archives from "../components/about&archives/Archives";
import ElseWhere from "../components/about&archives/ElseWhere";
import NavBar from "../components/header/NavBar";
import SignupBar from "../components/header/SignupBar";
import Footer from "../components/footer/Footer";
import BlogForm from "../components/blogs/BlogForm";
import { createPortal } from "react-dom";

function BlogPage() {
  const [post, setPost] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postData, setPostData] = useState<any>([]);

  useEffect(() => {
    if (post) openModal();
    console.log(post);
  }, [post]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPost(false);
  };

  const handleSubmit = (formData: any) => {
    setPostData([...postData, formData]);
    closeModal();
  };

  const handleClear = () => {
    // Additional logic to clear form fields if needed
    closeModal();
  };

  return (
    <div className="blog-page-container">
      <SignupBar />
      <NavBar />
      <Banner />
      <FeaturedBlogs />
      {isModalOpen && (
        <>
          <BlogForm
            isOpen={isModalOpen}
            closeModal={closeModal}
            onSubmit={handleSubmit}
            onClear={handleClear}
          />
        </>
      )}

      <div className="blogs-and-about">
        <div className="blogs">
          <Blogs setPost={setPost} postData={postData} />
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
