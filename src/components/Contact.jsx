import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const usercontact = async () => {
    try {
      const tokendata = localStorage.getItem("token");
      if (tokendata !== null) {
        const resp = await fetch("http://localhost:1000/getdata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": tokendata,
          },
        });
        const result = await resp.json();
        if (result.msg) {
          setdata({
            ...data,
            name: result.userdata.name,
            email: result.userdata.email,
            phone: result.userdata.phone,
          });
        }
        if (result.msg === false) {
          window.alert("Please provide valid token");
          navigate("/login");
        }
      } else {
        window.alert("Please Login First");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    usercontact();
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokendata = localStorage.getItem("token");
    if (tokendata !== null) {
      const { name, email, phone, message } = data;
      console.log(name, email, phone, message);
      const response = await fetch("http://localhost:1000/contact", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "auth-token": tokendata,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (!result) {
        console.log("uploading data error");
      } else {
        window.alert("message iss sent");
        setdata({ ...data, message: "" });
      }
    }
  };
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
                  <div className="contact_info_text">{data.phone}</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/external-bearicons-blue-bearicons/452/external-email-approved-and-rejected-bearicons-blue-bearicons-1.png" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">{data.email}</div>
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
                      value={data.name}
                      onChange={handleChange}
                      name="name"
                    />
                    <input
                      type="email"
                      id="contact_form_eamilid"
                      className="contact_form_email input_field"
                      placeholder="Your Email"
                      required
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      id="contact_form_phoneid"
                      className="contact_form_phone input_field"
                      placeholder="Your Phone no"
                      required
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea
                      className="text_field contact_form_message"
                      placeholder="Message"
                      cols="30"
                      rows="10"
                      onChange={handleChange}
                      name="message"
                    ></textarea>
                  </div>

                  <div className="formbutton mt-3">
                    <button
                      type="submit"
                      className="btn button"
                      onClick={handleSubmit}
                    >
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
