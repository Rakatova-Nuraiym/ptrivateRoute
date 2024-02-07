import { Header } from "./header/Header";
import Footer from "./footer/Footer";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import scss from "./Layuot.module.scss";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
