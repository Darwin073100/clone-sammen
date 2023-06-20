import React from "react";

function NavItem({children}) {
  return (
    <>
      <div className="item">
        {children}
      </div>
    </>
  );
}

export { NavItem };
