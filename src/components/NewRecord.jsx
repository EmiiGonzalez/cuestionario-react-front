import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { validate, requerido, valOtro, multiples
  , seRepite } from "./Helpers/validacion.js";
import alertify from "alertifyjs";

export const NewRecord = ({ url }) => {
  //hooks
  const [repite, setRepite] = useState({}); // Objeto para rastrear campos con errores "seRepite"
  const [record, setRecord] = useState({
    edad: "",
    sexo: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    p10: "",
    p11: "",
    p12: "",
    p13: "",
    p14: "",
    p15: "",
    p16: "",
    p17: "",
    p17_o: "",
    p4_o: "",
    p5_o: "",
    p6_o: "",
    p7_o: "",
    p11_o: "",
    p12_o: "",
    p14_o: "",
  });
  const [regla, setRegla] = useState({
    p4_o: false,
    p5_o: false,
    p6_o: false,
    p7_o: false,
    p11_o: false,
    p12_o: false,
    p14_o: false,
  })
  //fin hooks
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm();

  const navigate = useNavigate();

  const fieldNames = [
    { label: "edad", type: "number" },
    { label: "sexo", type: "number" },
    { label: "p1", type: "number" },
    { label: "p2", type: "number" },
    { label: "p3", type: "number" },
    { label: "p4", type: "number" },
    { label: "p5", type: "number" },
    { label: "p6", type: "number" },
    { label: "p7", type: "number" },
    { label: "p8", type: "number" },
    { label: "p9", type: "number" },
    { label: "p10", type: "number" },
    { label: "p11", type: "number" },
    { label: "p12", type: "number" },
    { label: "p13", type: "number" },
    { label: "p14", type: "number" },
    { label: "p15", type: "number" },
    { label: "p16", type: "number" },
    { label: "p17", type: "number" },
    { label: "p17_o", type: "text" },
    { label: "p4_o", type: "text" },
    { label: "p5_o", type: "text" },
    { label: "p6_o", type: "text" },
    { label: "p7_o", type: "text" },
    { label: "p11_o", type: "text" },
    { label: "p12_o", type: "text" },
    { label: "p14_o", type: "text" },
  ];

  const saveRecord = async (e) => {
    const conError = []

    multiples.forEach((field) => {
      if (repite[field]) {
        conError.push(field)
      }
    })

    if (conError.length === 0) {
      try {
        const response = await axios.post(`${url}rFormWeb/create`, record);
        alertify.success(`Se Agrego el Registro ${response.data.cuestn} ✔`);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      conError.forEach((field) => {
        alertify.error(`No se puede agregar el registro debido a error en el campo ${field}`);
      })
    }
  };

  return (
    <form
      className="form w-75 px-5 mx-auto mb-5 mt-2 bg-light border rounded"
      onSubmit={handleSubmit(saveRecord)}
    >
      <h1 className="text-center mb-3 fw-bold">Editar Registro</h1>
      {fieldNames.map(({ label, type }) => (
        <div className="mb-3" key={label}>
          <label className="form-label fw-bold fs-5" htmlFor={label}>
            {label}
          </label>
          <input
            {...register(label, 
              requerido.includes(label)
                ? {
                    required: validate[label].required,
                    minLength: validate[label].minLength,
                    maxLength: validate[label].maxLength,
                    min: validate[label].min,
                    max: validate[label].max,
                  }
                : {
                    required: regla[label],
                    minLength: validate[label].minLength,
                    maxLength: validate[label].maxLength,
                  }
                 
            )}
            className="form-control fs-5"
            id={label}
            type={type}
            value={record[label]}
            onChange={(e) => {
              const newValue = e.target.value;
              if (requerido.includes(label)){
                newValue.toString().includes(valOtro[label]) ? setRegla({ ...regla, [`${label}_o`]: true }) : setRegla({ ...regla, [`${label}_o`]: false })
              }

              if (multiples.includes(label)){
                const control = seRepite(newValue);
                if (control) {
                  setError(label, { type: "seRepite", shouldFocus: true });
                  setRepite({ ...repite, [label]: true });
                } else {
                  setRepite({ ...repite, [label]: false });
                }
              }
              setRecord({ ...record, [label]: newValue })
            }}
          />
          {errors[label]?.type === "required" && (
            <span className="text-danger">El campo es requerido ❌</span>
          )}
          {errors[label]?.type === "minLength" && (
            <span className="text-danger">Minimo {validate[label].minLength} caracteres ❗</span>
          )}
          {errors[label]?.type === "maxLength" && (
            <span className="text-danger">Maximo {validate[label].maxLength} caracteres ❗</span>
          )}
          {errors[label]?.type === "min" && (
            <span className="text-danger">Debe ser mayor a {validate[label].min} y menor a {validate[label].max} ❗</span>
          )}
          {errors[label]?.type === "max" && (
            <span className="text-danger">Debe ser menor a {validate[label].max} y mayor a {validate[label].min} ❗</span>
          )}
          {errors[label]?.type === "seRepite" && (
            <span className="text-danger">No se pueden repetir los valores ❗</span>
          )}
        </div>
      ))}
      <button className="btn btn-primary w-100" type="submit">
        Enviar
      </button>
    </form>
  );
};
