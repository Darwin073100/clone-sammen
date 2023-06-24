import React from 'react';
import notify from '../assets/icons/notify.svg';
import message from '../assets/icons/chat.svg';
import profile from '../assets/icons/user.svg';
import search from '../assets/icons/search.svg';

function MainHeader() {
  return (
    <>
    <header className="main-header">
          <div className="header-info">
            <div className="search">
              <button>
                <figure>
                  <img src={search} alt="search" />
                </figure>
              </button>
              <input type="text" placeholder='Search'/>
            </div>
            <div className="notification">
              <figure className="notify">
                <img src={notify} alt="notify" />
              </figure>
              <figure className="message">
                <img src={message} alt="message" />
              </figure>
              <figure className="profile">
                <img src={profile} alt="profile" />
              </figure>
            </div>
          </div>
          <div className="header-filter">
            <h1>Home</h1>
            <div className="filters">
              <button className='active'>All</button>
              <button>World</button>
              <button>Business</button>
              <button>Tech</button>
              <button>Healt</button>
              <button>Sports</button>
              <button>Gaming</button>
              <button>Food</button>
            </div>
          </div>
        </header>
    </>
  )
}

export { MainHeader };