import React from "react";
import './Contact.scss'
import contact from "../../assets/contact.jpg";
import Form from "./form/Form";
import CustomGoogleMapWithMarker from "./maps/CustomGoogleMapWithMarker";
const Contact = () => {
  return (
    <div id="contact-cont">
      {" "}
      <div
        id="about-img"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundPosition: "top",
        }}
      >
        <div id="main-titles">İLETİŞİM</div>
        <div id="main-titles-two">Tecrübemiz , İşimiz , Kalitemiz ...</div>
      </div>
      <div style={{ width: "100%", height: "49vh", marginTop: "2em" }}>
        <CustomGoogleMapWithMarker></CustomGoogleMapWithMarker>
      </div>
      <div>
        <Form></Form>
      </div>
    </div>
  );
};

export default Contact;
