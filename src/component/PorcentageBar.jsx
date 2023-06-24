import React from "react";

function PorcentageBar({porcentage, barType, userName}) {
  return (
    <div className="author">
      <div className={`bar bar-${porcentage} bar-${barType}`}></div>
      <div className="author-body">
        <span className="user-name">{ userName }</span>
        <span className="quantity">{ porcentage }%</span>
      </div>
    </div>
  );
}

export { PorcentageBar };
