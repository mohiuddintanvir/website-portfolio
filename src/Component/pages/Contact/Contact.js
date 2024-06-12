import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    from_email: '',
    PhoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,

    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here (e.g., send data to a server)
    emailjs
      .sendForm('service_xlzvwjk', 'template_wf0gayt', form.current, 'dyIkAx3bQxuy8d2Wl')
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Reset form fields to show placeholders and clear data
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact_us_green h-screen w-screen flex justify-center items-center lg:mt-0 mt-60" id="contact">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line" id="i69b-2">
            <form className="form-box" ref={form} onSubmit={handleSubmit}>
              <div className="container-block form-wrapper">
                <div className="head-text-box">
                  <p className="text-blk contactus-head ">Contact us</p>
                  <p className="text-blk contactus-subhead lg:flex hidden">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  </p>
                </div>
                <div className="responsive-container-block">
                  <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt-6">
                    <p className="text-blk input-title">FIRST NAME</p>
                    <input
                      type="text"

                      className="input text-white"
                      id="name"
                      name="first_name"
                      placeholder="Enter your first name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="responsive-cell-block text-white wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME</p>
                    <input
                      type="text"
                      className="input"
                      id="lastName"
                      name="last_name"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="responsive-cell-block text-white wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL</p>
                    <input
                      type="email"
                      className="input"
                      id="email"
                      name="from_email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="responsive-cell-block text-white wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER</p>
                    <input
                      type="text"
                      className="input"
                      id="phoneNumber"
                      name="PhoneNumber"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="responsive-cell-block text-white wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-6">
                    <p className="text-blk input-title">WHAT DO YOU HAVE IN MIND</p>
                    <textarea
                      className="textinput"
                      id="message"
                      name="message"
                      placeholder="Please enter query..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-10 lg:flex hidden" id="ifgi">
            <div className="container-box lg:inline hidden">
              <div className="text-content">
                <p className="text-blk contactus-head lg:font-PlayfairDisplaySC">Contact Me</p>
                <p className="text-blk contactus-subhead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                </p>
              </div>
              <div className="workik-contact-bigbox">
                <div className="workik-contact-box">
                  <div className="phone text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET21.jpg" alt="Phone" />
                    <p className="contact-text">+1258 3258 5679</p>
                  </div>
                  <div className="address text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET22.jpg" alt="Address" />
                    <p className="contact-text">hello@workik.com</p>
                  </div>
                  <div className="mail text-box">
                    <img className="contact-svg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET23.jpg" alt="Mail" />
                    <p className="contact-text">102 street, y cross 485656</p>
                  </div>
                </div>
                <div className="social-media-links">
                  <a href="">
                    <img className="social-svg" id="is9ym" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" alt="Email" />
                  </a>
                  <a href="">
                    <img className="social-svg" id="i706n" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" alt="Twitter" />
                  </a>
                  <a href="">
                    <img className="social-svg" id="ib9ve" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" alt="Instagram" />
                  </a>
                  <a href="">
                    <img className="social-svg" id="ie9fx" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" alt="Facebook" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;