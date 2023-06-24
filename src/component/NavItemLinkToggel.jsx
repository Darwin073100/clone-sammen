import React from "react";

function NavItemLinkToggel({link, picture, text, state, setState}) {
  return (
    <button onClick={()=>setState(!state)}>
      <img src={ picture } alt={ text } />
      <span>{ text }</span>
    </button>
  );
}

export { NavItemLinkToggel };
