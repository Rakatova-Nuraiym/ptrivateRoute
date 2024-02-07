import scss from "./footer.module.scss";
import instagram from "../../../assets/512px-Instagram_new 1.png";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div>
            <h2>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h2>
            <img src={instagram} alt="" />
          </div>
          <div>
            <h2>КОНТАКТНЫЕ ТЕЛЕФОНЫ</h2>
            <p>+375 29 292-29-29 (VEL) </p>
            <p>+375 33 333-33-33 (МТС)</p>
          </div>
          <div>
            <h2>О НАС</h2>
            <p>
              Индивидуальное изготовление
              <p> EVA ковриков для вашего автомобиля ваш город</p>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
