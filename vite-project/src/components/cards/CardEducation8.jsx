import "./CardEducation.css"
import Educantion8 from "../../assets/img/Education8.png"

const CardEducation8 = () => {
    return (
        <div class="cardE">
          <div class="cardE-image">
            <img src={Educantion8} alt="Education" className="card-image" />
          </div>
            <p class="cardE-title">Atrae y convence inversionista</p>
            <p class="cardE-body">
                Curso Dictado por Marcus Dantus, curso tomado en Crehana
            </p>
            <p class="footer">Octubre 2021</p>
        </div>
    )
}

export default CardEducation8