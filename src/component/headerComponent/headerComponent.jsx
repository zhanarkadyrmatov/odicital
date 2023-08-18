import React from "react";
import Logo from "../../image/oracle.png";
import "./header.css";

function headerComponent() {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header_nav">
            <img src={Logo} alt="" />
            <ul className="">
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Услуги</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">+996 700 453 456</a>
              </li>
            </ul>
            <button>guhjnkmd;f</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default headerComponent;
