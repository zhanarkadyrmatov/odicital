import React from "react";
import HeroComponent from "../component/heroComponent/HeroComponent";
import HeaderComponent from "../component/headerComponent/headerComponent";
import "./page.css";

function page() {
  return (
    <div>
      <div className="header_hero_bg">
        <HeaderComponent />
        <HeroComponent />
      </div>
    </div>
  );
}

export default page;
