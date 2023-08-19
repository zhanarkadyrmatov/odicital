import React from "react";
import Logo from "../../image/oracle.png";
import { Link } from "react-router-dom";
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
                <Link to="/home">Главная</Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default headerComponent;
