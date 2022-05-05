import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [logstate, setlogstate] = useState(false);
  const remove = () => {
    localStorage.removeItem("token");
    setlogstate(false);
    window.alert("You have been logged out");
    navigate("/login");
  };

  useEffect(() => {
    remove();
  }, []);
  return <div></div>;
};

export default Logout;
