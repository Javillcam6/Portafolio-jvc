import React, { useState } from 'react';
import styles from '../Inicio/Inicio.module.css';
import Animation from '../../animations/animation';
import DevApps from '../../assets/img/DevApps.png';
import Animation2 from '../../animations/animation2';

const Inicio = () => {
  const [copied, setCopied] = useState(false);

  const copiarCorreo = () => {
    const correoElectronico = 'javillcam@gmail.com';

    // Campo de entrada de texto oculto
    const inputCorreo = document.createElement('input');
    inputCorreo.value = correoElectronico;
    document.body.appendChild(inputCorreo);

    inputCorreo.select();
    inputCorreo.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el contenido
    document.execCommand('copy');

    // Eliminar el campo de entrada de texto
    document.body.removeChild(inputCorreo);

    // Actualiza y muestra mensaje de texto
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const descargarCV = () => {
    window.location.href = '';
  };
  

  return (
    <section className={styles.InicioA}>
      <div className={styles.tittleH1}>
        <h1 className={styles.gradientTittle}>VC Impulsa empresa especializada en desarrollo web</h1>
      </div>
      <article className={styles.description}>
        <p>
          ¡Bienvenido a VC Impulsa! Explora mi universo digital y descubre la fusión perfecta entre estética y funcionalidad. Como apasionado desarrollador fullstack con especialización en ReactJS, me dedico a crear experiencias web envolventes y atractivas. Mi enfoque meticuloso abarca tanto el frontend como el backend, asegurando la excelencia en cada detalle. ¡Sumérgete en la innovación y eleva tus proyectos con mi expertise!
        </p>
        <div className={styles.button}>
          <div>
            <button onClick={copiarCorreo}><Animation></Animation></button>
            {copied && <span style={{ marginBottom: '5px', color: '#87919C' }}>Correo copiado: correo@example.com</span>}
            <Animation2 descargarCV={descargarCV} />
          </div>
        </div>
      </article>
      <span className={styles.imgDevApps}>
        <img src={DevApps} alt="Logo" className={styles.DevApps} />
      </span>
    </section>
  );
};

export default Inicio;
