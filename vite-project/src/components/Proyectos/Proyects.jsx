import styles from '../Proyectos/Proyects.module.css';
import Proyecto1 from '../../assets/img/Proyecto1.png';
import Proyecto2 from '../../assets/img/Proyecto2.png';
import Proyecto3 from '../../assets/img/Proyecto3.png';
import Proyecto4 from '../../assets/img/Proyecto4.png';
import Proyecto5 from '../../assets/img/Proyecto5.png';
import { FaHtml5, FaReact, FaCss3Alt, FaJs, FaGithub, FaSquareGithub   } from "react-icons/fa6";




const Proyects = () => {
    const cards = [
        {
            imagen: [Proyecto1],
            name: 'Proyecto 1',
            description: 'Landing Page para negocio, utilizando HTML5 y CSS3',
            technology: [FaHtml5, FaCss3Alt, FaGithub],
            url: 'https://javillcam6.github.io/ColmenaPractice/index.html'
        },
        {
            imagen: [Proyecto2],
            name: 'Proyecto 2',
            description: 'Proyecto 2',
            technology: [FaHtml5, FaCss3Alt, FaGithub, FaJs],
            url: 'https://javillcam6.github.io/Crud2/?classId=ecedf508-97aa-4991-808e-cf6e0cc04935&assignmentId=b1e42a72-7d8d-4964-be72-6428c366493e&submissionId=a7f06957-d7d6-5951-424a-0bf55786e32d'
        },
        {
            imagen: [Proyecto3],
            name: 'Proyecto 3',
            description: 'Proyecto 3',
            technology: [FaHtml5, FaCss3Alt, FaGithub, FaJs, FaReact],
            url: 'https://javillcam6.github.io/Dashboard/'
        },
        {
            imagen: [Proyecto4],
            name: 'Proyecto 4',
            description: 'Proyecto 2',
            technology: [FaHtml5, FaCss3Alt, FaGithub, FaJs, FaReact],
            url: 'https://github.com/Javillcam6/Colmena-RestaurantX'
        },
        {
            imagen: [Proyecto5],
            name: 'Proyecto 5',
            description: 'Proyecto 3',
            technology: [FaHtml5, FaCss3Alt, FaGithub, FaJs, FaReact],
            url: 'https://github.com/Javillcam6/Lowlow'
        },
        
        
    ]
    
    return(
        <section className={styles.Proyectos}>
            <h2>Proyectos</h2>
            <div className={styles.cards}>
                {
                    cards.map((card,index) => {
                        return(
                            <div key={index} className={styles.card1}>
                                <div className={styles.img}>
                                    <img width="100%" height={280} src={card.imagen[0]} alt=""/>
                                </div>
                                    <h3>{card.name}</h3>
                                    <p className={styles.description}>{card.description}</p>
                                    <div className={styles.technology}>
                                        <FaHtml5 color='2FDF84' size={30}>{card.technology}</FaHtml5>
                                        <FaCss3Alt color='2FDF84' size={30}>{card.technology}</FaCss3Alt>
                                        <FaGithub color='2FDF84' size={30}>{card.technology}</FaGithub>
                                    </div>
                                    <div className={styles.Github}>
                                        <a href={card.url}>
                                            <FaSquareGithub color='#63707E' size={25} />
                                        </a>
                                    </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Proyects