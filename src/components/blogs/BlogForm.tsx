// Modal.js
import React from "react";
import "../../styles/components/blogs/BlogForm.scss";
import { getFormattedDate } from "../../utils/date.util";

const BlogForm = (props: {
  isOpen: any;
  closeModal: any;
  onSubmit: Function;
  onClear: Function;
}) => {
  const { isOpen, closeModal, onSubmit, onClear } = props;
  const [title, setTitle] = React.useState("");
  const [name, setName] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleClear = () => {
    setTitle("");
    setContent("");
    onClear();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ name, title, content, date: getFormattedDate() });
  };

  return (
    <div className={`blog-form-container`}>
      <div className="blog-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>

        <form onSubmit={handleSubmit}>
          <h2>Post your Blog</h2>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />

          <label>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter title of your blog"
            required
          />

          <label>Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter the content"
            required
          />
          <div className="button-container">
            <button type="button" onClick={handleClear}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
