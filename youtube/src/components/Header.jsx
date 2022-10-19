import React from 'react';
import './header.css' 

export function Header() {
    return (
      <div className="Header-container">
        <div className="Header-left">
          <i className="fas fa-bars"></i>
          <img className="logo" alt="img" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" />
        </div>
        <div className="Header-center">
          <div className="search">
            <input type="text" placeholder="search" className="search-box" />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
            {/* <i className="fa fa-microphone"></i> */}
          </div>
        </div>
        <div className="Header-right">
          <div className="user-info">
            <i className="fas fa-video"></i>
            <i className="far fa-bell"></i>
            <img className="avatar"  alt=""src="data:image/png;base64,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"
            />
          </div>
        </div>
      </div>
    );
};
export default Header