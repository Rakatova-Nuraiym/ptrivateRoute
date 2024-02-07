import React from "react";
import scss from "./login.module.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url =
  "https://api.elchocrud.pro/api/v1/b7ae580a63edc7d4b1138f051fee3f25/user_regitration";
const LoginPage = () => {
  const [nameValue, setNameValue] = useState("");
  const [loginValue, setLoginValue] = useState("");
  const navigate = useNavigate();

  const handle = () => {
    const checkUser = {
      name: nameValue,
      login: loginValue,
    };
    getRequst(checkUser);
    setLoginValue("");
    setNameValue("");
  };

  const getRequst = async (checkUser) => {
    const response = await axios.get(url);
    const response_Data = response.data;

    const filted = response_Data.find(
      (item) => item.name === checkUser.name && item.login === checkUser.login
    );
    console.log(filted);

    // if (!filted) {
    //   navigate("/login");
    // }

    if (filted) {
      localStorage.setItem("isAuth", filted._id);
      navigate("/");
    } else {
      alert("uncorrect user name or login");
    }
  };
  const Singn_in = () => {
    navigate("/registration");
  };

  return (
    <div className={scss.LoginPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.login}>
            <div className={scss.img_container}>
              <h2>ФОРМА ЗАЯВКИ</h2>
            </div>
            <div className={scss.input}>
              <input
                type="text"
                placeholder="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
              />
              <input
                value={loginValue}
                placeholder="login"
                onChange={(e) => setLoginValue(e.target.value)}
                type="password"
              />
            </div>
            <button onClick={handle}>далее</button>
            <button onClick={Singn_in}>зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
