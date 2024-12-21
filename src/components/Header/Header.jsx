import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <Link to={"/"} className="header-logo">
            <img src="/images/Vector.svg" alt="logo" />
            <span>Babito</span>
          </Link>
          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>
          <div className="header-burger">
            <img src="/images/Menu 1.svg" alt="burger" />
          </div>
        </div>
      </div>
    </header>
  );
};
