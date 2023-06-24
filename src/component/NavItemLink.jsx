import React from "react";

function NavItemLink({link, picture, text}) {
  return (
    <button onClick={console.log('click')}>
      <img src={ picture } alt={ text } />
      <span>{ text }</span>
    </button>
  );
}

export { NavItemLink };
