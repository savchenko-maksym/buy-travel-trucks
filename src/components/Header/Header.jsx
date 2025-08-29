import { Link } from "react-router-dom";
import Container from "../Container/Container.jsx";
import s from "./Header.module.css";
import MainLogo from "../../assets/images/icons/MainLogo.svg?react";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <div className={s.wrapLogo}>
            <MainLogo className={s.logo} />
          </div>
          <nav className={s.navWrap}>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
