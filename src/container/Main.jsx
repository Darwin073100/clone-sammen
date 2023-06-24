import React from "react";
import '../styles/Main.css';

function Main({children}) {
  return (
    <main className="main">
        {children}
    </main>
  );
}

export { Main };
