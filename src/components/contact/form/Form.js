import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Form.scss";
import ReCAPTCHA from "react-google-recaptcha";
const Form = () => {
  const toggle = () => setCapcthaDone((prevState) => !prevState);
  const recaptchaRef = React.createRef();
  const form = useRef();
  const [capcthaIsDone, setCapcthaDone] = useState(false);
  function onChange() {
    toggle();
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqdcdff",
        "template_5y7myvg",
        form.current,
        "qO6ce20J10NxIRFOV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="form-cont">
      <div id="form-items">
        <form ref={form} onSubmit={sendEmail} id="form">
          <div id="fname-lname">
            <label htmlFor="fname">
              Name Lastname:
              <input
                maxLength={25}
                required
                minLength={5}
                type="text"
                id="fname"
                name="fname"
                style={{ width: "100%" }}
              />
            </label>
          </div>
          <div id="fname-lname">
            <label htmlFor="fname">
              Email:
              <input
                style={{ width: "100%" }}
                minLength={10}
                required
                type="email"
                maxLength={40}
                id="femail"
                name="femail"
              />
            </label>
          </div>
          <div id="fname-lname">
            <label htmlFor="fname">
              Telefon:
              <input
                style={{ width: "80%" }}
                required
                minLength={10}
                maxLength={15}
                type="tel"
                id="ftel"
                name="ftel"
              />
            </label>
          </div>
          <div id="fname-lname">
            <label htmlFor="fname">
              Mesajınız:
              <textarea
                style={{ width: "100%" }}
                required
                maxLength={200}
                type="textarea"
                id="fmessage"
                name="fmessage"
              />
            </label>
          </div>
          <ReCAPTCHA
            sitekey="6LeIm4klAAAAALyrQZEGb68urjLuJ8kolA0fpB49"
            //6LdPlYklAAAAAH6jxgl3_lvjtGGeWlEal5Yf4oua
            //6LdPlYklAAAAAKRXV4Z2RXd-UNedIWoGs7DgtOMU
            ref={recaptchaRef}
            onChange={onChange}
          />

          <div id="fname-lname">
            {capcthaIsDone === true ? (
              <button style={{ width: "100%" }} type="submit" value="Gönder">
                Gönder
              </button>
            ) : (
              <button
                style={{
                  width: "100%",
                  backgroundColor: "gray",
                  cursor: "alias",
                }}
                type="submit"
                disabled
                value="Gönder"
              >
                Gönder
              </button>
            )}
          </div>
        </form>
      </div>
      <div id="contact-page">
        <div id="company-name">
          <div>
            <strong
              style={{
                color: "blue",
                fontSize: "1.4em",
                marginBottom: "1em",
                marginTop: "2em",
              }}
            >
              Email :
            </strong>{" "}
            info@gunteks.com
          </div>
          <div>
            <strong style={{ color: "blue", fontSize: "1.4em" }}>
              Telefon :
            </strong>{" "}
            +90 (276) 333 01 22
          </div>
        </div>
        <div>
          <strong style={{ color: "blue", fontSize: "1.4em" }}>Adres:</strong>
        </div>
        <ul>
          <li>
            Karma Osb. Mah. Halil Kaya Gedik Bulvarı No:265/A UŞAK/TÜRKİYE
          </li>
          <li> FAX: +90 (276) 333 01 22</li>
          <li>TEL: +90 (276) 333 01 22</li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
