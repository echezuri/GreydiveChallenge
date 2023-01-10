import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
       <div>
        <h3>
          A modo de challenge para la empresa GreyDive, te invito a completar la
          siguiente encuesta.
        </h3>
      </div>
      <Link to="/formulario">
        <button>Iniciar encuesta</button>
      </Link>
    </div>
  );
};

export default Home;
