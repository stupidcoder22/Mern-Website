import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const tokenverify = async () => {
    const val = localStorage.getItem("token");
    if (val !== null) {
      const resp = await fetch("http://localhost:1000", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": val,
        },
      });
      const result = await resp.json();
      if (result.msg) {
        console.log(result.uid);
      }
      if (result.msg === false) {
        window.alert("Please provide valid token");
        navigate("/login");
      }
    } else {
      window.alert("Please Login First");
      navigate("/login");
    }
  };

  useEffect(() => {
    tokenverify();
  }, []);

  return (
    <div className="home-page container-fluid">
      <div className="home-div">
        <p className="pt-5">WELCOME GUYS</p>
        <h1>We Are The MERN Developer</h1>
      </div>
    </div>
  );
};

export default Home;
