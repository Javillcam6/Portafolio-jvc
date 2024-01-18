import "./CardEducation.css"
import Educantion11 from "../../assets/img/Education11.png"

const CardEducation11 = () => {
    return (
        <div class="cardE">
          <div class="cardE-image">
            <img src={Educantion11} alt="Education" className="card-image" />
          </div>
            <p class="cardE-title">Atrae y convence inversionista</p>
            <p class="cardE-body">
                Curso Dictado por Marcus Dantus, curso tomado en Crehana
            </p>
            <p class="footer">Octubre 2021</p>
        </div>
    )
}

export default CardEducation11