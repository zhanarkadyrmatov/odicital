import React from "react";
import "./mentor.css";
import Mentor1 from "../../image/mentor1.png";
import Mentor2 from "../../image/mentor2.png";
import Mentor3 from "../../image/mentor3.png";
import Mentor4 from "../../image/mentor4.png";

const ITEMS = [
  {
    id: 1,
    img: Mentor1,
    title: "Timur O",
    text: "Back-End Developer",
  },
  {
    id: 1,
    img: Mentor2,
    title: "Timur O",
    text: "Back-End Developer",
  },
  {
    id: 1,
    img: Mentor3,
    title: "Timur O",
    text: "Back-End Developer",
  },
  {
    id: 1,
    img: Mentor4,
    title: "Timur O",
    text: "Back-End Developer",
  },
];

function MentorComponent() {
  return (
    <div id="mentor">
      <div className="container">
        <h1 className="text">Quis pretium vitae suspendisse.</h1>
        <h2 className="title">Наши менторы</h2>
        <div className="mentor">
          {ITEMS.map((e) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                key={e.id}
                className="mentor_blog"
              >
                <img src={e.img} alt="" />
                <h2>{e.title}</h2>
                <p>{e.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MentorComponent;
