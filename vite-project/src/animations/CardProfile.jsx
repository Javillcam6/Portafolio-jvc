import '../animations/CardProfile.css'
import FotoPerfil from '../assets/img/Profile.jpg';



const CardProfile = () =>{
    return(
        <div class="card">
            <div class="image">
                <img src={FotoPerfil} alt="Profile" className="card-image" />
            </div>
            <div class="card-info">
                <span>Javier Villavicencio</span>
                <p>Developer Fullstack</p>
            </div>
            <a href="#" class="button"><p>Contactame</p></a>
        </div>
    )
}

export default  CardProfile;