import React from "react";

const About = () => {
  return (
    <div className="container emp-profile mt-5">
      <form method="">
        <div className="row">
          <div className="col-md-4 profilepic">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h2>Prateek Singh</h2>
              <h6>Web Developer</h6>
              <p className="profile-rating mt-3 mb-5">
                RANKINGS: <span> 1/10 </span>
              </p>

              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                  >
                    About
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                  >
                    Timeline
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn btn button"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>

        <div className="row">
          {/* left side url */}
          <div className="col-md-4 mt-5 d-flex justify-content-start align-items-center">
            <div className="profile-work">
              <h5> Social Media</h5>
              <a>Youtube</a>
              <br />
              <a>Instagram</a>
              <br />
              <a>Twitter</a>
              <br />
              <a>LinkedIn</a>
              <br />
              <a>WhatsApp</a>
              <br />
              <a>Facebook</a>
              <br />
            </div>
          </div>
          {/* right side data toogle */}

          <div className="col-md-8 pl-5 about-info mt-4">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>USER ID</label>
                  </div>
                  <div className="col-md-6">
                    <p>7454564545 </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>Prateek Singh </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>Prateek@gmail.com </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>93434347653 </p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
