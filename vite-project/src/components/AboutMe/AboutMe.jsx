import ContainerProfile from '../../components/AboutMe/Components/ContainerProfile.jsx';
import ContainerDescription from '../../components/AboutMe/Components/ContainerDescription.jsx';
import Skills from '../../components/AboutMe/Components/SkillCard.jsx'

import CardEducation from '../cards/CardEducation.jsx';
import CardEducation1 from '../cards/CardEducation1.jsx';
import CardEducation2 from '../cards/CardEducation2.jsx';
import CardEducation3 from '../cards/CardEducation3.jsx';
import CardEducation4 from '../cards/CardEducation4.jsx';
import CardEducation5 from '../cards/CardEducation5.jsx';
import CardEducation6 from '../cards/CardEducation6.jsx';
import CardEducation7 from '../cards/CardEducation7.jsx';
import CardEducation8 from '../cards/CardEducation8.jsx';
import CardEducation9 from '../cards/CardEducation9.jsx';
import CardEducation10 from '../cards/CardEducation10.jsx';
import CardEducation11 from '../cards/CardEducation11.jsx';
import CardEducation12 from '../cards/CardEducation12.jsx';


import Styles from '../AboutMe/AboutMe.module.css'





const AboutMe = () => {
    return(
            <section className={Styles.ContainerProfile}>
                <section className={Styles.ContainerInfo}>
                    <ContainerProfile/>
                    <ContainerDescription />
                    <Skills/>
                </section>
                <div className={Styles.h3Edu}>
                <h3>Educacion</h3>
                </div>
                <article className={Styles.StyleEdu}>

                    <div className={Styles.Edu1}>
                    <CardEducation />
                    </div>
                    <div className={Styles.Edu2}>                    
                        <CardEducation1 />
                    </div>
                    <div className={Styles.Edu3}>                    
                        <CardEducation2 />
                    </div>
                    <div className={Styles.Edu4}>                    
                        <CardEducation3 />
                    </div>
                    <div className={Styles.Edu5}>                    
                        <CardEducation4 />
                    </div>
                    <div className={Styles.Edu6}>                    
                        <CardEducation5 />
                    </div>
                    <div className={Styles.Edu7}>                    
                        <CardEducation6 />
                    </div>
                    <div className={Styles.Edu8}>                    
                        <CardEducation7 />
                    </div>
                    <div className={Styles.Edu9}>                    
                        <CardEducation8 />
                    </div>
                    <div className={Styles.Edu9}>                    
                        <CardEducation9 />
                    </div>
                    <div className={Styles.Edu10}>                    
                        <CardEducation10 />
                    </div >
                    <div className={Styles.Edu11}>                    
                        <CardEducation11 />
                    </div>
                    <div className={Styles.Edu12}>                    
                        <CardEducation12 />
                    </div>


                </article>

                

        </section>
    )
}

export default AboutMe