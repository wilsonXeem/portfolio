import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Emailjs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4l45ife",
        "template_eq2pnjo",
        e.target,
        "lwKABq47y2oppSz-K"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(!show);
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      {show ? (
        <div className="success">
          <p>Message sent Successfully!</p>
          <span
            onClick={() => setShow(!show)}
            style={{ cursor: "pointer", textAlign: "right" }}
          >
            x
          </span>
        </div>
      ) : (
        <form className="form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            name="Message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
