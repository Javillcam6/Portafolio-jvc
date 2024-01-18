import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styles from "../Menu/SocialMedia.module.css";

const Redes = () => {
    return (
        <div className={styles["social-media"]}>
            <a href="https://www.instagram.com/javier.v.c/" className={styles["menu-social"]}>
                <AiFillInstagram />
            </a>
            <a href="https://github.com/Javillcam6" className={styles["menu-social"]}>
                <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/javier-villavicencio-camarena/" className={styles["menu-social"]}>
                <AiFillLinkedin />
            </a>
        </div>
    );
};

export default Redes;
