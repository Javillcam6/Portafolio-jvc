import { FaHtml5, FaReact, FaCss3Alt, FaJs, FaGithub  } from "react-icons/fa6";
import Styles from '../../AboutMe/Components/ContainerDescription.module.css';

function ContainerDescription() {
    return (
      <>
            <div className={Styles.descriptionContainer}>
                <p className={Styles.description}>Impulsado por el desarrollo personal y profesional, lidero equipos con eficacia, confiando en mi enfoque innovador. Mi fascinación abarca emprendimiento, finanzas, y desarrollo web, respaldando mi compromiso con el éxito organizacional.
                </p>
                <p className={Styles.description}>Apasionado por la convergencia de tecnología y disrupción, me sumerjo en Web3, criptomonedas y blockchain, explorando nuevas fronteras digitales. Fusiono innovación con mi amor por videojuegos, deportes y el trading, abarcando desde el desarrollo web.</p>
                <span className={Styles.Icons}>
                    <FaHtml5 color='2FDF84' size={35}/> <FaJs color='2FDF84' size={35}/> <FaGithub color='2FDF84' size={35}/> <FaCss3Alt color='2FDF84' size={35}/> <FaReact color='2FDF84' size={35}/>
                </span>
            </div> 
        </>
    )
  }
  
  export default ContainerDescription