import React from "react";
import HeroComponent from "../component/heroComponent/HeroComponent";
import HeaderComponent from "../component/headerComponent/headerComponent";
import "./home.css";
import BlogComponent from "../component/blogComponent/blogComponent";
import AboutComponent from "../component/AboutUsComponent/aboutComponent";
import WhyComponent from "../component/whyComponent/whyComponent";
import MentorComponent from "../component/mentorComponent/mentorComponent";
import SliderComponent from "../component/SliderComponent/sliderComponent";
import FooterComponent from "../component/FooterComponent/footerComponent";
import ClientComponent from "../component/ClientComponent/clientComponent";
import WhatsappComponent from "../component/whatsappComponent/whatsappCpmponent";

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
      <ClientComponent />
      <FooterComponent />
      <WhatsappComponent />
    </div>
  );
}

export default page;
