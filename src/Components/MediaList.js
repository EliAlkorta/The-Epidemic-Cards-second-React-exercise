import React from "react";
import senoras from "../images/shopping.jpeg";
import isolator from "../images/isolatoir.jpg";
import flu from "../images/flu.jpg";
import Mediacard from "./Mediacard";

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-cards">
        <h1>All Women In Pandemics Are Beautiful</h1>
        <ul className="section-women_list">
          <li>
            <Mediacard
              image={senoras}
              title="Señoras elegantes con ropas galantes"
              date="Gripe española de 1918"
              text="Estas señoras salen a pasear del brazo en plena pandemia de la gripe
                    española. Se tapan la cara con mascarilla, pero ellas van charlando
                    y acompañadas. Parece que se podía caminar de dos en dos, no como
                    ahora. ¡Quién fuera caminante de principios del siglo XX! Nostalgia
                    de paseos, nostalgia de brazos encadenados, la amistad en tiempos
                    del coronavirus es la imagen del otro en una pantalla y soledad y
                    aburrimiento y mucho estudar React y Javascript."
              likes="868"
            />
          </li>
          <li>
            <Mediacard
              image={isolator}
              title="Esta soy yo estudiando Javascript y React"
              date="Finales del siglo XIX"
              text="A finales del siglo XIX yo vivía en una ciudad industrial de la Inglaterra victoriana cuando sufrimos una epidemia de tuberculosis que me obligó a dejar la fábrica y a confinarme en mi piso de una habitación. Mi padre era inventor y me puso esta escafandra para evitar que me contagiara. Esta instantánea me trae muchos recuerdos de cuando empecé a estudiar Javascript, allá por mis comienzos como estudiante, cuando me enseñaron a hacer mis primeros bucles."
              likes="1033"
            />
          </li>
          <li>
            <Mediacard
              image={flu}
              title="Aquí con mis colegas"
              date="Gripe española de 1918"
              text="Aquellos sí que eran tiempos divertidos, ¡aunque sudorosos! La gripe no nos pilló desprevenidas. Fabricamos nuestras propias caretas y, de paso, salimos a celebrar el carnaval. Estuve un par de años sin depilarme las cejas ni el bigote. Todo tiene su lado bueno, amigas."
              likes="3415"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
