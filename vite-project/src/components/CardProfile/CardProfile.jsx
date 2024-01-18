import "../../components/CardProfile/CardP.css"
import Educantion from "../../assets/img/Education1.png"
import Educantion1 from "../../assets/img/Education2.png"
import Educantion2 from "../../assets/img/Education3.png"
import Educantion3 from "../../assets/img/Education4.png"
import Educantion4 from "../../assets/img/Education5.png"

const CardEducation = () => {
  const cardsEdu = [
    {
      image: [Educantion],
      name: "Atrae y convence a inversionistas",
      description: "Curso dictado por Marcus Dantus, curso tomado en Crehana",
      date: "Octubre, 2021",
    },
    {
      image: [Educantion1],
      name: "Proyecto 2",
      description: "Proyecto 2",
      date: "Octubre, 2021",
    },
    {
      image: [Educantion2],
      name: "Proyecto 3",
      description: "Proyecto 3",
      date: "Octubre, 2021",
    },
    {
      image: [Educantion3],
      name: "Proyecto 4",
      description: "Proyecto 4",
      date: "Octubre, 2021",
    },
    {
      image: [Educantion4],
      name: "Proyecto 5",
      description: "Proyecto 5",
      date: "Octubre, 2021",
    },
  ];

  return (
    <section className={style.Container}>
        <h2>Educación</h2>
        <div className={style.cardsEdu}> 
            {
                cardsEdu.map((card, index) => {
                    return(
                        <div key={index} className={style.cardE}>
                            <div className={style.cardE-image}>
                                <img src={card.image} alt="" />
                            </div>
                            <p className="cardE-title">{card.name}</p>
                            <p className="cardE-body">{card.description}</p>
                            <p className="footer">{card.date}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>



  );
};

export default CardEducation;
