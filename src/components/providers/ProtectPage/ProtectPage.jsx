import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProtectPage = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const lacation = localStorage.getItem("isAuth");
  const lacationBullean = !!lacation;

  useEffect(() => {
    switch (pathname) {
      case "/login":
        if (lacationBullean) {
          navigate("/");
        }
        break;
      case "/":
        if (!lacationBullean) {
          navigate("/login");
        }
        break;
      case "/registration":
        if (lacationBullean) {
          navigate("/");
        }
        break;
      default:
        break;
    }
  });

  return children;
};

export default ProtectPage;
