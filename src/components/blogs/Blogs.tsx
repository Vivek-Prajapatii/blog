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
        From the Firehose
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Post New Blog{" "}
        </button>
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
        <h1>Creating Forms</h1>
        <span>January 1, 2023 by John</span>
        <p>
          Input fields. Text areas. Radio buttons and checkboxes. These are some
          of the main interaction points we, as developers, have with our users.
          We put them front and center, users fill them out as best as they can,
          and with any luck, they’ll send it back to you without any validation
          errors.
        </p>
        <p>
          Form handling is an integral part of a large number of web apps, and
          it’s one of the things React does best. You have a lot of freedom to
          implement and control those input controls how you want, and there are
          plenty of ways to achieve the same goal. But is there a best practice?
          Is there a best way to do things?
        </p>
        <p>
          This article will show you a few different ways to handle form values
          in React. We’ll look at useState, custom Hooks, and, finally, no state
          at all! Note that we will create a login form with an email and a
          password field in all of these examples, but these techniques can be
          used with most types of forms.{" "}
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
