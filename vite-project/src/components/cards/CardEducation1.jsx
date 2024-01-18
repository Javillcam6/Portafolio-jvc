import "./CardEducation.css"
import Educantion1 from "../../assets/img/Education1.png"

const CardEducation1 = () => {
    return (
        <div class="cardE">
          <div class="cardE-image">
            <img src={Educantion1} alt="Education" className="card-image" />
          </div>
            <p class="cardE-title">StartUp Garden</p>
            <p class="cardE-body">
                Participacion en TalentLand en StartUp Garden
            </p>
            <p class="footer">Julio 2022</p>
        </div>
    )
}

export default CardEducation1