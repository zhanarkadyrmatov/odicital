import React from "react";
import "./footer.css";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
function FooterComponent() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer_form">
              <h2>To contact us</h2>
              <p>Habitant at sed tincidunt sapien. </p>
              <form action=""></form>
              <form className="footer_input" action="">
                <label for="GET-name">Your E-mail</label>
                <input type="email" placeholder="david@gmail.com" />
                <label for="GET-name">Write anything</label>
                <input type="text" placeholder="Felis id tincidunt pulvar " />
                <button>Send</button>
              </form>
            </div>
            <div className="footer_contact">
              <h3>Телефон:</h3>
              <a href="#">+996 709 683 738</a>
              <br />
              <br />
              <a href="#">+996 557 978 715</a>
              <h4>social media:</h4>
              <a href="#">
                <BsWhatsapp />
              </a>
              <a href="#">
                <BsTelegram />
              </a>
            </div>
            <div className="footer_email">
              <h3>E-mail:</h3>
              <a href="#">contact@yrhome.com</a>
              <h4>Adress:</h4>
              <a href="#">contact@yrhome.com</a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "16px 0",
          backgroundColor: "#12141B",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "400",
        }}
      >
        Copyright2023 All Rights Recerved
      </div>
    </>
  );
}

export default FooterComponent;
