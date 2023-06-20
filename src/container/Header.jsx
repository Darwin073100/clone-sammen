import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { NavFooter } from "./NavFooter";
import { NavItem } from "./NavItem";
import { NavItemLink } from "../component/NavItemLink";
import home from "../assets/icons/home.svg";
import add from "../assets/icons/add.svg";
import article from "../assets/icons/article.svg";
import browser from "../assets/icons/browser.svg";
import settings from "../assets/icons/settings.svg";
import start from "../assets/icons/star.svg";

function Header() {
  const [isArticle, setIsArticle] = useState(false);
  const [isWallet, setIsWallet] = useState(false);
  const [isSettings, setIsSettings] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isHome, setIsHome] = useState(false);

  return (
    <>
      <header className="header">
        <header>
          <h2>
            <strong>Sammen</strong>
          </h2>
        </header>
        <main className="nav-main">
          <button className="btn-add">
            <img src={ add } alt="article" />
            <span>Add new article</span>
          </button>
          <div className="nav">
            <NavItem>
              <NavItemLink link={"/"} picture={ home } text={"Home"} state={isHome} setState={setIsHome}/>
            </NavItem>
            <NavItem>
              <NavItemLink link={"/"} picture={ article } text={"Article"} state={isArticle} setState={setIsArticle} />
              {isArticle && (
                <div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                </div>
              )}
            </NavItem>
            <NavItem>
              <NavItemLink link={"/"} picture={ browser } text={"Wallet"} state={isWallet} setState={setIsWallet}/>
              {isWallet && (
                <div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                </div>
              )}
            </NavItem>

            <NavItem>
              <NavItemLink link={"/"} picture={ start } text={"Saved"} state={isSaved} setState={setIsSaved}/>
            </NavItem>
            <NavItem>
              <NavItemLink link={"/"} picture={ settings } text={"Settings"} state={isSettings} setState={setIsSettings}/>
              {isSettings && (
                <div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                  <div className="sub-item">
                    <button>item</button>
                  </div>
                </div>
              )}
            </NavItem>
          </div>
        </main>
        <NavFooter />
      </header>
    </>
  );
}

export { Header };
