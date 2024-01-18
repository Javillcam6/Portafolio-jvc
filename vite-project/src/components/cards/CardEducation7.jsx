import "./CardEducation.css"
import Educantion7 from "../../assets/img/Education7.png"

const CardEducation7 = () => {
    return (
        <div class="cardE">
          <div class="cardE-image">
            <img src={Educantion7} alt="Education" className="card-image" />
          </div>
            <p class="cardE-title">Atrae y convence inversionista</p>
            <p class="cardE-body">
                Curso Dictado por Marcus Dantus, curso tomado en Crehana
            </p>
            <p class="footer">Octubre 2021</p>
        </div>
    )
}

export default CardEducation7