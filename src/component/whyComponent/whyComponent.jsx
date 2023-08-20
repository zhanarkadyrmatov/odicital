import React from "react";
import WhyImage from "../../image/why.png";
import WhyImage1 from "../../image/why1.png";
import WhyImage2 from "../../image/why3.png";
import "./why.css";

const ITEMS = [
  {
    id: 1,
    img: WhyImage,
    title: "Easy Booking",
    text: "Lorem ipsum dolor sit amet consectetur. Habitant at sed tincidunt sapien. ",
  },
  {
    id: 2,
    img: WhyImage1,
    title: "Responsibility",
    text: "Lorem ipsum dolor sit amet consectetur. Habitant at sed tincidunt sapien. ",
  },
  {
    id: 3,
    img: WhyImage2,
    title: "Quick order supply",
    text: "Lorem ipsum dolor sit amet consectetur. Habitant at sed tincidunt sapien. ",
  },
];

function WhyComponent() {
  return (
    <div id="why">
      <div className="container">
        <div className="why_bg">
          <h1 className="why_title">Почему мы?</h1>
          <p className="why_text">
            Habitant at sed tincidunt sapien. Purus maecenas risus mattis duis
            arcu se.
          </p>
          <div className="why">
            {ITEMS.map((e) => {
              return (
                <div key={e.id} className="why_blog">
                  <img src={e.img} alt="" />
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyComponent;
