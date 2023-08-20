import React from "react";
import Javascript from "../../image/js.png";
import Python from "../../image/python.png";
import Flutter from "../../image/flutter.png";
import jan from "../../image/Frame.png";
import "./blog.css";

const ITEMS = [
  { id: 1, img: Javascript, title: "Front-end" },
  { id: 2, img: Python, title: "Back-end" },
  { id: 3, img: Flutter, title: "Flutter" },
];
function BlogComponent() {
  return (
    <div id="blog">
      <div className="container">
        <h1 className="text">Quis pretium vitae suspendisse.</h1>
        <h2 className="title">Наши курсы</h2>
        <div className="blog">
          {ITEMS.map((e) => {
            return (
              <div key={e.id} className="blog_card">
                <img src={e.img} alt="" />
                <h2>{e.title}</h2>
                <a href="#">
                  <img src={jan} alt="" />
                  <span>Подробнее</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
