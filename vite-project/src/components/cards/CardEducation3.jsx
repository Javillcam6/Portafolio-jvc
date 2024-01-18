import "./CardEducation.css"
import Educantion3 from "../../assets/img/Education3.png"

const CardEducation3 = () => {
    return (
        <div class="cardE">
          <div class="cardE-image">
            <img src={Educantion3} alt="Education" className="card-image" />
          </div>
            <p class="cardE-title">Campamento POSIBLE 2021</p>
            <p class="cardE-body">
                Constancia por participacion al campamento nacional POSIBLE 2021
            </p>
            <p class="footer">Agosto, 2021</p>
        </div>
    )
}

export default CardEducation3