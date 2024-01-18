import React from "react";
import styles from "../Menu/Menu.module.css";
import { Link } from "react-router-dom";
import Redes from "./SocialMedia";
import { AiFillHome, AiFillContainer } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Logo from "../../assets/img/logo.png"

const Menu = () => {
  return (
    <header className={styles.header}>
      <section className={styles.headMenu}>
      <span className={styles.logo} ><img src={Logo} alt="Logo" className={styles.Logotipo} /></span>

      <nav className={styles.nav}>
        <Link to="/"><span className={styles.textGradient}>Inicio</span></Link>
        <Link to="/Javillcam/proyects"><span className={styles.textGradient}>Proyectos</span></Link>
        <Link to="/Javillcam/about-me"><span className={styles.textGradient}>Sobre mí</span></Link>
        <a href="#"></a>
      </nav>

      <nav className={styles.navMobile}>
        <Link to="/" className={styles.menuMobile}>
          <AiFillHome  />
        </Link>
        <Link to="/Javillcam/proyects" className={styles.menuMobile}>
          <AiFillContainer />
        </Link>
        <Link to="/Javillcam/about-me" className={styles.menuMobile}>
          <BsFillPersonCheckFill />
        </Link>
      </nav>

      <Redes />
    </section>
    </header>
  );
};

export default Menu;
