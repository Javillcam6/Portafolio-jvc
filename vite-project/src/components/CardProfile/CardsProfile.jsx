import Education from '../../assets/img/Education.png'
import Education1 from '../../assets/img/Education1.png'
import Education2 from '../../assets/img/Education2.png'
import Education3 from '../../assets/img/Education3.png'
import Education4 from '../../assets/img/Education4.png'

const CardsProfile = () => {
    const cards = [
        {
            imagen: [Education],
            name: 'Proyecto 1',
            description: 'Landing Page para negocio, utilizando HTML5 y CSS3',
            date: "Octubre, 2021",
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
}

export default CardsProfile