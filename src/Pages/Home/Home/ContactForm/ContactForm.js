import React from "react";
import contactbg from "../../../../assets/images/bgbox.png";

const ContactForm = () => {
  return (
    <section
      className="mt-8"
      style={{
        background: `url(${contactbg})`,
      }}
    >
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-xl font-bold text-primary">Contact Us</h1>
            <h3 className="py-3 text-3xl">Stay connected with us</h3>
            <input
              type="email"
              placeholder="Email Address"
              className="input w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input w-full max-w-xs my-5"
            />
            <textarea
              className="textarea w-full max-w-xs"
              placeholder="Your message"
            ></textarea>{" "}
            <br />
            <button className="btn btn-primary mt-8">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
