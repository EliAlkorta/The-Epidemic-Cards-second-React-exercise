import React from "react";
import senoras from "../images/shopping.jpeg";
import "../styles/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardHeader = (
      <div className="card">
        <header className="card-header">
          <div className="container">
            <img src={senoras} className="App-pic" alt="pic" width="100" />
          </div>
          <div className="text-container">
            <h3 className="name">Señoras elegantes con ropas galantes</h3>
            <p className="date">Gripe española de 1918</p>
          </div>
        </header>
      </div>
    );

    const cardMain = (
      <main className="card-main">
        <div className="main-container">
          <p className="card-text">
            Estas señoras salen a pasear del brazo en plena pandemia de la gripe
            española. Se tapan la cara con mascarilla, pero ellas van charlando
            y acompañadas. Parece que se podía caminar de dos en dos, no como
            ahora. ¡Quién fuera caminante de principios del siglo XX! Nostalgia
            de paseos, nostalgia de contacto. La amistad en tiempos del
            coronavirus es la imagen del otro en una pantalla y la cháchara
            interminable del whatsApp. Confinamiento cibernético que nos
            resecará la piel pero nos ayudará a estudiar Javascript y React. No
            hay mal que por bien no venga.
          </p>
        </div>
      </main>
    );

    const wholeCard = (
      <div className="this-is-all">
        {cardHeader}
        {cardMain}
      </div>
    );

    return wholeCard;
  }
}

export default App;
