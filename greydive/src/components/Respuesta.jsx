import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Respuesta = () => {
  const params = useParams();
  const [respuesta, setRespuesta] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://greydive-echezuri-default-rtdb.firebaseio.com/form/${params.id}.json`
      )
      .then((response) => {
        setRespuesta(response.data);
      });
  }, [params]);

  return (
    <div id="respuesta">
      <h4>Registro {params.id}</h4>
      <p>Resultado de la encuesta</p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Respuesta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>{respuesta.full_name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{respuesta.email}</td>
          </tr>
          <tr>
            <td>Fecha de nacimiento</td>
            <td>{respuesta.birth_date}</td>
          </tr>
          <tr>
            <td>País</td>
            <td>{respuesta.country_of_origin}</td>
          </tr>
        </tbody>
      </table>

      <Link to={"/"}>
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default Respuesta;
