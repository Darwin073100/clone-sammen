import React from 'react'
import cardImage from "../assets/icons/keyboard.svg";
import user from "../assets/icons/user.svg";

import rayo from "../assets/icons/rayo.svg";
import three from "../assets/icons/button-with-three.svg";
import chat from "../assets/icons/chat-2.svg";
import cycle from "../assets/icons/cycle.svg";

function Post() {
  return (
    <article className="card-article">
        <div className="card-picture">
          <figure>
            <img src={cardImage} alt="picture-article" />
          </figure>
        </div>
        <div className="card-body">
          <div className="card-body-header">
            <div className="user-info">
              <figure className='figure-red'>
                <img src={ user } alt="profile-picture" />
              </figure>
              <div className="user-name">
                <span className="name">Jessica </span>
                <span className="user">@jesshere</span>
                <br/>
                <span className="category">#gaming</span>
              </div>
            </div>
            <span className="card-date user">18 min ago</span>
          </div>
          <div className="card-body-body">
            <h2>The best mechanical keyboard for gaming in 2023</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              totam minus molestiae debitis facilis aperiam voluptate deleniti
            </p>
          </div>
          <div className="card-body-footer">
            <button><span>{"<"}</span>420<span>{">"}</span></button>
            <button>
              <figure>
                <img src={ chat } alt="imge" />
              </figure>
              <span>69</span>
            </button>
            <button>
              <figure>
                <img src={ cycle } alt="imge" />
              </figure>
              <span>69</span>
            </button>
            <button>
              <figure>
                <img src={ rayo } alt="imge" />
              </figure>
              <span>69</span>
            </button>
            <button>
              <figure>
                <img src={ three } alt="imge" />
              </figure>
            </button>
          </div>
        </div>
      </article>
  )
}

export { Post };