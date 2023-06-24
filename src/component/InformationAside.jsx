import React from "react";
import { PorcentageBar } from "./PorcentageBar";

function InformationAside() {
  return (
    <aside className="information">
      <div className="my-wallet">
        <div className="title">
          <h4>My Wallet</h4>
        </div>
        <div className="smn">
          <h1>7316.4</h1>
          <span>SMN</span>
        </div>
        <div className="address">
          <button>
            <span>Address</span>
            <span>{">"}</span>
          </button>
        </div>
      </div>
      <div className="author-top">
        <h3>Author of the month</h3>
        <PorcentageBar
          barType={"blue"}
          porcentage={"20"}
          userName={"@edwingq07"}
        />
        <PorcentageBar
          barType={"blue"}
          porcentage={"50"}
          userName={"@marian05"}
        />
        <PorcentageBar
          barType={"purple"}
          porcentage={"80"}
          userName={"@joel3400"}
        />
        <div className="author-top-information">
          <span className="votos">
            <strong>4172 votos * </strong>3 days left
          </span>
          <p className="description">
            the poll rewards up to <span>1200 tokens</span> distributed evenly
          </p>
        </div>
      </div>
    </aside>
  );
}

export { InformationAside };
