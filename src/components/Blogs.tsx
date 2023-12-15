import React from "react";
import "../styles/components/Blogs.scss";

function Blogs() {
  return (
    <div className="blogs-container">
      <h2>From the Firehose</h2>
      <div className="blog">
        <h1>Sample blog post</h1>
        <span>January 1, 2014 by Mark</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          culpa eveniet dolor numquam ab distinctio voluptatibus deleniti
          exercitationem sunt perspiciatis. Dolor odio ipsam explicabo et
          recusandae quas adipisci quod illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          tenetur beatae itaque labore eos laborum adipisci aliquam quibusdam!
          Nulla maiores quas qui placeat nisi earum accusamus dicta porro cumque
          repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          tenetur beatae itaque labore eos laborum adipisci aliquam quibusdam!
          Nulla maiores quas qui placeat nisi earum accusamus dicta porro cumque
          repudiandae.
        </p>
      </div>
      <div className="blog">
        <h1>Sample blog post</h1>
        <span>January 1, 2014 by John</span>
        <p>
          The emergence and growth of blogs in the late 1990s coincided with the
          advent of web publishing tools that facilitated the posting of content
          by non-technical users who did not have much experience with HTML or
          computer programming and early Web users therefore tended to be hackers and
          computer enthusiasts.
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
