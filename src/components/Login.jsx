import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userlogin, setuserlogin] = useState({
    email: "",
    pass: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserlogin({ ...userlogin, [name]: value });
  };
  // console.log(userlogin);

  const postDb = async (e) => {
    e.preventDefault();

    const { email, pass } = userlogin;
    const res = await fetch("http://localhost:1000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    });

    const data = await res.json();
    console.log(data);
    if (data.msg) {
      localStorage.setItem("token", data.token);
      window.alert("Login successful");
      console.log("Login successful");
      navigate("/");
    } else {
      window.alert("Invalid Login");
      console.log("Invalid login");
    }
    // if (data.status === 422 || !data) {
    //   window.alert("Invalid Login");
    //   console.log("Invalid login");
    // } else {
    //   window.alert("Login successful");
    //   console.log("Login successful");
    //   navigate("/");
    // }
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  onChange={handleChange}
                  name="email"
                  required
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  onChange={handleChange}
                  name="pass"
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                onClick={postDb}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
