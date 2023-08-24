import React, { useState } from "react";
import Logo from "../../image/oracle.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXLg } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

import "./header.css";

AOS.init();

function HeaderComponent() {
  const [burger, setBurger] = useState(false);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header_nav">
            <img className="header_logo" src={Logo} alt="" />
            <ul className={burger ? "header_item" : "header_link"}>
              <li>
                <Link to="/main">Главная</Link>
              </li>
              <li>
                <Link to="#">О компании</Link>
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

            {burger ? (
              <BsXLg onClick={() => setBurger(false)} className="header_menu" />
            ) : (
              <GiHamburgerMenu
                onClick={() => setBurger(true)}
                className="header_menu"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
