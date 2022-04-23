import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-info mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/ultraviolet/2x/phone.png" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 1111 543 2198</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/external-bearicons-blue-bearicons/452/external-email-approved-and-rejected-bearicons-blue-bearicons-1.png" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">Prateek@gmail.com</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/ultraviolet/2x/ip-address.png" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Thane, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-container py-5">
                <div className="contact-form-title">
                  <h3>Contact Us</h3>
                </div>
                <form className="card p-5 shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="contactform_name_css d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Your name"
                      required
                    />
                    <input
                      type="email"
                      id="contact_form_eamilid"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required
                    />
                    <input
                      type="text"
                      id="contact_form_phoneid"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone no"
                      required
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact_form_message"
                      placeholder="Message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="formbutton mt-3">
                    <button type="submit" className="btn button">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
