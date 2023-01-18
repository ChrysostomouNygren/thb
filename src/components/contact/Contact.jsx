import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-comp" id="contact">
      <h2>Contact</h2>
      <div className="contact-border">
        <div className="contact-card">
          <a href="https://www.instagram.com/the.horizon.bleeds/">
              Instagram
            </a>
            <a href="mailto:#">Email</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
