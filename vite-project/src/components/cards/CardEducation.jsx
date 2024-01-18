import "./CardEducation.css"
import Educantion1 from "../../assets/img/Education.png"

const CardEducation = () => {
    return (
        <div class="cardE">
          <div class="cardE-image">
            <img src={Educantion1} alt="Education" className="card-image" />
          </div>
            <p class="cardE-title">Atrae y convence inversionista</p>
            <p class="cardE-body">
                Curso Dictado por Marcus Dantus, curso tomado en Crehana
            </p>
            <p class="footer">Octubre 2021</p>
        </div>
    )
}

export default CardEducation