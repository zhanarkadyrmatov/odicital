import React from "react";
import "./aboutus.css";
import Image from "../../image/Rectangle1.png";
import Image1 from "../../image/Rectangle2.png";
import Image2 from "../../image/Group.png";
const ITEMS = [
  { id: 1, text: 10, title: "Years Experience" },
  { id: 2, text: 300, title: "Years Experience" },
  { id: 3, text: "20k", title: "Happy customer" },
];

function AboutComponent() {
  return (
    <div id="about">
      <div className="container">
        <h1 className="text">Quis pretium vitae suspendisse.</h1>
        <h2 className="title">О нас</h2>
        <div className="about">
          <div className="about_img">
            <img className="image" src={Image} alt="" />
            <img className="image2" src={Image1} alt="" />
          </div>
          <div className="about_title">
            <p>
              Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed
              ridiculus iaculis eget egestas blandit euismod. Ligula senectus
              egestas cras risus sodales commodo. Enim nec neque sodales quis
              sit massa posuere. Id eget ultrices tempus sit id donec feugiat.
              Congue aliquet tristique egestas dictum tincidunt ac. Odio varius
              sitsapien aliquet aliquam quis et tellus velit bibendum. Quis
              pretium vitae suspendisse at. Iaculis eu convallis egestas a
              mattis viverra. Id leo sollicitudin mattiId leo sollicitudin matti
            </p>
            <div className="about_blog">
              {ITEMS.map((e) => {
                return (
                  <div key={e.id} className="about_card">
                    <h3>{e.text}</h3>
                    <p>{e.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
