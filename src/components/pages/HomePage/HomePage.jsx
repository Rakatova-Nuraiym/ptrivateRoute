import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import scss from "./home.module.scss";
import { useNavigate } from "react-router-dom";

const url =
  "https://api.elchocrud.pro/api/v1/b7ae580a63edc7d4b1138f051fee3f25/user_regitration";
const HomePage = () => {
  const [user, setuser] = useState([]);
  const navigate = useNavigate();

  const getRequest = async () => {
    const response = await axios.get(url);
    const responseData = response.data;
    setuser(responseData);
  };

  useEffect(() => {
    getRequest();
  }, []);

  const exitFunc = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.card}>
            {user.map((item, index) => (
              <div className={scss.user_card} key={index}>
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
          <button onClick={exitFunc}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
