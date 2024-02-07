import React from "react";

import scss from "./registration.module.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url =
  "https://api.elchocrud.pro/api/v1/b7ae580a63edc7d4b1138f051fee3f25/user_regitration";

const RegistrationPage = () => {
  const [nameValue, setNameValue] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const navigate = useNavigate();

  const regitration = () => {
    const newUser = {
      name: nameValue,
      login: loginValue,
    };
    postRequest(newUser);
    if (nameValue === "" && loginValue === "") {
      return alert("write the name");
    }
    setLoginValue("");
    setNameValue("");
  };

  const postRequest = async (newUser) => {
    const response = await axios.post(url, newUser);
    const response_data = response.data;
    console.log(response_data);
    navigate("/login");
  };

  return (
    <div className="container">
      <div className={scss.content}>
        <div className={scss.login}>
          <div className={scss.img_container}>
            <h2>ФОРМА РЕГИСТРАЦИИ</h2>
          </div>
          <div className={scss.input}>
            <input
              placeholder="name"
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <input
              placeholder="login"
              value={loginValue}
              onChange={(e) => setLoginValue(e.target.value)}
              type="password"
            />
          </div>
          <button onClick={regitration}>далее</button>
        </div>
      </div>
    </div>
  );
};
export default RegistrationPage;
