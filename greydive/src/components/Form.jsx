import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import form from "../commons/db.json";
import greydive from "../greydive";
import { useState } from "react";
import Respuesta from "./Respuesta";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const URL = "https://drive.google.com/file/d/1hsOMsEHx5mjFSt0nIPovciai8DdLq0Nu";

const Form = () => {
  useEffect(() => {
    console.log("holas");
    console.log(user);
    console.log("queseyo");
  }, []);
  const [user, setUser] = useState("");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        "https://greydive-echezuri-default-rtdb.firebaseio.com/form.json",
        data
      )
      .then((response) => {
        setUser(response.data.name);
      });
    swal({
      icon: "success",
      title: "Muchas gracias!",
      text: `Tu respuesta ha sido guardada.`,
    });
  };

  return (
    <>
      <div id="formulario">
        <h4>Por favor, completa la siguiente encuesta.</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          {form.items?.map((elemento, i) =>
            elemento.type !== "select" ? (
              <div id={elemento.type}>
                <label>{elemento.label}</label>
                <input
                  // class="form-control"
                  type={elemento.type}
                  key={i}
                  {...register(`${elemento.name}`, {
                    required: elemento.required,
                  })}
                />
              </div>
            ) : (
              <div id={elemento.type}>
                <label>{elemento.label}</label>
                <select
                  // class="form-select"
                  {...register(`${elemento.name}`, {
                    required: elemento.required,
                  })}
                >
                  <option selected disabled>
                    Seleccionar país
                  </option>
                  {elemento.options.map((opcion, i) => (
                    <option value={opcion.value} key={i}>
                      {opcion.label}
                    </option>
                  ))}
                </select>
              </div>
            )
          )}
        </form>
      </div>
      <div className="acceso-respuesta">
        {user !== "" ? (
          <>
            <p>Puedes acceder a tu respuesta haciendo <Link to={`/respuesta/${user}`}>Click aquí</Link></p>
            
          </>
        ) : null}
      </div>
    </>
  );
};

export default Form;