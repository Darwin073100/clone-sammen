import React from "react";
import "../styles/PostSection.css";

function PostSection({children}) {
  return (
    <section className="post-section">
      {children}
    </section>
  );
}

export { PostSection };
