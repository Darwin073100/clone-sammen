import React from "react";

function PostSection({children}) {
  return (
    <section className="post-section">
      {children}
    </section>
  );
}

export { PostSection };
