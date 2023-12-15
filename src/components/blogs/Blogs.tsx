import React from "react";
import "../../styles/components/blogs/Blogs.scss";

function Blogs(props: { setPost: Function; postData: any }) {
  const { setPost, postData } = props;

  const handleClick = () => {
    setPost(true);
  };
  return (
    <div className="blogs-container">
      <h2>
        From the Firehose{" "}
        <span
          onClick={() => {
            handleClick();
          }}
        >
          +
        </span>
      </h2>
      {postData &&
        postData.map((item: any) => {
          return (
            <div className="blog">
              <h1>{item.title}</h1>
              <span>
                {item.date} by {item.name}
              </span>
              <pre>{item.content}</pre>
            </div>
          );
        })}
      <div className="blog">
        <h1>Sample blog post</h1>
        <span>January 1, 2014 by John</span>
        <p>
          The emergence and growth of blogs in the late 1990s coincided with the
          advent of web publishing tools that facilitated the posting of content
          by non-technical users who did not have much experience with HTML or
          computer programming and early Web users therefore tended to be
          hackers and computer enthusiasts.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          tenetur beatae itaque labore eos laborum adipisci aliquam quibusdam!
          Nulla maiores quas qui placeat nisi earum accusamus dicta porro cumque
          repudiandae.
        </p>
        <p>
          The emergence and growth of blogs in the late 1990s coincided with the
          advent of web publishing tools that facilitated the posting of content
          by non-technical users who did not have much experience with HTML or
          computer programming. Previously, knowledge of such technologies as
          HTML and File Transfer Protocol had been required to publish content
          on the Web, and early Web users therefore tended to be hackers and
          computer enthusiasts.
        </p>
      </div>
      <div className="button-stack">
        <button>Older</button>
        <button>Newer</button>
      </div>
    </div>
  );
}

export default Blogs;
