import "./CardEducation.css"
import Educantion4 from "../../assets/img/Education4.png"

const CardEducation4 = () => {
    return (
        <div class="cardE">
          <div class="cardE-image">
            <img src={Educantion4} alt="Education" className="card-image" />
          </div>
            <p class="cardE-title">Certificado Fundamentos de Tokenización</p>
            <p class="cardE-body">
                Curso en formación Criptomonedas y Blockchain de bit2me Academy  
            </p>
            <p class="footer">Junio 2022</p>
        </div>
    )
}

export default CardEducation4