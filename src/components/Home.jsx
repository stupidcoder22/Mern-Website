import React, { useEffect } from "react";

const Home = () => {
  const tokenverify = async () => {
    const val = localStorage.getItem("token");
    const resp = await fetch("http://localhost:1000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: val,
      },
    });
    console.log(resp);
  };

  useEffect(() => {
    const res = tokenverify();
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
