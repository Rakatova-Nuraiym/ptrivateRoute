import { Link } from "react-router-dom";
import scss from "./header.module.scss";
import icon from "../../../assets/Group 1.png";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const url =
  "https://api.elchocrud.pro/api/v1/b7ae580a63edc7d4b1138f051fee3f25/user_regitration";
const link = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "Login",
  //   href: "login",
  // },
  // {
  //   name: "Registration",
  //   href: "/registration",
  // },
];
export const Header = () => {
  const [userProfile, setuserProfile] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userId = localStorage.getItem("isAuth");

  const getUser = async () => {
    const response = await axios.get(url);
    const responseData = response.data;

    if (userId) {
      const finder = responseData.find((item) => item._id === +userId);
      if (finder) {
        setuserProfile(finder);
      } else {
        localStorage.removeItem("isAuth");
        navigate("/login");
      }
    } else {
      console.log("not found id");
    }
  };

  useEffect(() => {
    getUser();
  }, [pathname]);

  const Sign_Out = () => {
    localStorage.removeItem("isAuth");
    setuserProfile({});
    navigate("/login");
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={icon} alt="" />
          </div>
          <nav>
            {link.map((item, index) => (
              <ul key={index}>
                <li>
                  <Link to={item.href}>{item.name}</Link>
                </li>
              </ul>
            ))}
          </nav>
        </div>
        {userId ? (
          <div>
            <p>User:{userProfile.name}</p>
            <button onClick={Sign_Out}>Exit</button>
          </div>
        ) : (
          <>
            <div className={scss.link}>
              <Link to="/login">sign in</Link>
              <Link to="/registration">sign up</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
