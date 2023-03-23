import React from 'react';

export default function QuickMenuComponent ({$path}: any) {
  return (
    <div id="quickMenu">
      <div className="row1">
        <a href="#!" className="info-btn">
          <img src={`${$path}img/quick_menu/deliveryInfo.png`} alt=""/>
        </a>
      </div>
      <div className="row2">
        <ul>
          <li><a href="#!" className="row2-btn1">등급별 혜택</a></li>
          <li><a href="#!" className="row2-btn2">레시피</a></li>
        </ul>
      </div>
      <div className="row3">
        <div className="up-box">
          <a href="#!" className="up-btn"><svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="#ddd" xmlns="http://www.w3.org/2000/svg"><path d="M5 11L9 7L13 11" stroke="#ddd" strokeWidth="1.3"></path></svg></a>
          <h2>최근 본 상품</h2>
        </div>
        <div className="view-box">
          <ul>
              <li>
                  <div className="gap"><a href="#!"><img src={`${$path}img/quick_menu/quick-menu-1.jpg`} alt=""/></a></div>
              </li>
              <li>
                  <div className="gap"><a href="#!"><img src={`${$path}img/quick_menu/quick-menu-2.jpg`} alt=""/></a></div>
              </li>
              <li>
                  <div className="gap"><a href="#!"><img src={`${$path}img/quick_menu/quick-menu-3.jpg`} alt=""/></a></div>
              </li>
          </ul>
        </div>
        <div className="down-box">
          <a href="#!" className="down-btn"><svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 7L9 11L5 7" stroke="#666" strokeWidth="1.3"></path></svg></a>
        </div>
      </div>
  </div>
  );
};