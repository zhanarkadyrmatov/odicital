import React from "react";
import HeroComponent from "../component/heroComponent/HeroComponent";
import HeaderComponent from "../component/headerComponent/headerComponent";
import "./page.css";
import BlogComponent from "../component/blogComponent/blogComponent";
import AboutComponent from "../component/AboutUsComponent/aboutComponent";
import WhyComponent from "../component/whyComponent/whyComponent";
import MentorComponent from "../component/mentorComponent/mentorComponent";
import SliderComponent from "../component/SliderComponent/sliderComponent";

function page() {
  return (
    <div>
      <div className="header_hero_bg">
        <HeaderComponent />
        <HeroComponent />
      </div>
      <BlogComponent />
      <AboutComponent />
      <WhyComponent />
      <SliderComponent />
      <MentorComponent />
    </div>
  );
}

export default page;
