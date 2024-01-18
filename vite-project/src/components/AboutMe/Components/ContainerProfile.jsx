import CardProfile from '../../../animations/CardProfile.jsx'
import Styles from '../../AboutMe/Components/ContainerProfile.module.css';

function ContainerProfile() {
    return (
      <>
        <div className={Styles.profile}>
            <h2 className={Styles.TittleProfile}>Mi perfil</h2>
            <article className={Styles.CardProfile}>
                    <CardProfile/>
            </article>
        </div>      
        </>
    )
  }
  
  export default ContainerProfile
