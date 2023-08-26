import React, { useState } from "react";
import "./footer.css";
import { BsWhatsapp, BsTelegram, BsFillCheckCircleFill } from "react-icons/bs";
function FooterComponent() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      console.log({ email: email, message: message });
      setEmail("");
      setMessage("");
      setIsFormSubmitted(true);
      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 3000);
      return;
    } else {
      console.log("error?");
    }
  };

  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer_form">
              <h2>To contact us</h2>
              <p>Habitant at sed tincidunt sapien. </p>
              <form onSubmit={handleSubmit} className="footer_input" action="">
                <label for="GET-name">Your E-mail</label>
                <input
                  id="GET-email"
                  value={email}
                  type="email"
                  placeholder="david@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="GET-name">Write anything</label>
                <input
                  type="text"
                  id="GET-message"
                  placeholder="Felis id tincidunt pulvar "
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
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
      {isFormSubmitted ? (
        <div className="alert">
          <BsFillCheckCircleFill /> <span>отправлен</span>
        </div>
      ) : null}
    </>
  );
}

export default FooterComponent;
