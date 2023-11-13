import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  validate,
  requerido,
  valOtro,
  multiples,
  seRepite,
  noIncluye,
} from "./Helpers/validacion.js";
import { fieldNames } from "./Helpers/fieldnames.js";
import alertify from "alertifyjs";

export const NewRecord = ({ url }) => {
  //hooks
  const [repite, setRepite] = useState({}); // Objeto para rastrear campos con errores "seRepite"
  const [valorValido, setValorValido] = useState({});
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
    p17_o: true,
  });
  //fin hooks

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();

  const navigate = useNavigate();

  const saveRecord = async (e) => {
    const conError = [];
    const noValidos = [];

    for (const key in valorValido) {
      if (valorValido[key] === true) {
        noValidos.push(key);
      }
    }

    multiples.forEach((field) => {
      if (repite[field]) {
        conError.push(field);
      }
    });

    const noHayError = conError.length === 0 && noValidos.length === 0;

    if (noHayError) {
      alertify
        .confirm(
          "¿Confirmar Cambios?",
          async () => {
            try {
              await axios.post(
                `${url}rFormWeb/create/`,
                e
              );
              alertify.success("Se Actualizaron los Cambios");
              navigate("/admin");
            } catch (error) {
              alertify.alert("Error ❗", "No se pudo Actualizar los Cambios");
            }
          },
          () => {
            alertify.error("Se cancelaron los Cambios");
          }
        )
        .set("labels", {
          ok: "Si",
          cancel: "No",
        })
        .set("closable", true)
        .set("movable", false)
        .set("title", "");
    } else {
      if (conError.length > 0) {
        conError.forEach((field) => {
          alertify.error(
            `No se puede agregar el registro debido a error de dato repetido en el campo ${field}`
          );
        });
      }
      if (noValidos.length > 0) {
        noValidos.forEach((field) => {
          alertify.error(
            `No se puede agregar el registro debido a un dato invalido en el campo ${field} `
          );
        });
      }
    }
  };

  return (
    <form
      className="form w-75 px-5 mx-auto mb-5 mt-2 bg-light border rounded"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(saveRecord)(e);
      }}
    >
      <h1 className="text-center mb-3 fw-bold">Editar Registro</h1>
      {fieldNames.map(({ label, type }) => (
        <div className="mb-3" key={label}>
          <label className="form-label fw-bold fs-5" htmlFor={label}>
            {label}
          </label>
          <input
            {...register(
              label,
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
              const comprobar =
                label != "edad" &&
                label != "p17_o" &&
                label != "p4_o" &&
                label != "p5_o" &&
                label != "p6_o" &&
                label != "p7_o" &&
                label != "p11_o" &&
                label != "p12_o" &&
                label != "p14_o" &&
                label != "p17";

              //inicio de validaciones
              if (requerido.includes(label)) {
                newValue.toString().includes(valOtro[label])
                  ? setRegla({ ...regla, [`${label}_o`]: true })
                  : setRegla({ ...regla, [`${label}_o`]: false });
              }

              if (comprobar) {
                const control = noIncluye(label, newValue);
                if (control) {
                  setError(label, {
                    type: "valorInvalido",
                    shouldFocus: true,
                    message: `El valor ${newValue} no es una respuesta válida 👀`,
                  });
                  setValorValido({ ...valorValido, [label]: true });
                } else {
                  setValorValido({ ...valorValido, [label]: false });
                }
              }

              if (multiples.includes(label)) {
                const control = seRepite(newValue);
                if (control) {
                  setError(label, { type: "seRepite", shouldFocus: true });
                  setRepite({ ...repite, [label]: true });
                } else {
                  setRepite({ ...repite, [label]: false });
                }
              }
              //fin de validaciones

              //seteo del valor
              setRecord({ ...record, [label]: newValue });
            }}
            onWheel={(e) => e.target.blur()}
          />
          {errors[label]?.type === "required" && (
            <span className="text-danger">El campo es requerido ❌</span>
          )}
          {errors[label]?.type === "minLength" && (
            <span className="text-danger">
              Minimo {validate[label].minLength} caracteres ❗
            </span>
          )}
          {errors[label]?.type === "maxLength" && (
            <span className="text-danger">
              Maximo {validate[label].maxLength} caracteres ❗
            </span>
          )}
          {errors[label]?.type === "min" && (
            <span className="text-danger">
              Debe ser mayor a {validate[label].min} y menor a{" "}
              {validate[label].max} ❗
            </span>
          )}
          {errors[label]?.type === "max" && (
            <span className="text-danger">
              Debe ser menor a {validate[label].max} y mayor a{" "}
              {validate[label].min} ❗
            </span>
          )}
          {errors[label]?.type === "seRepite" && (
            <span className="text-danger">
              No se pueden repetir los valores 😡
            </span>
          )}
          {errors[label]?.type === "valorInvalido" && (
            <span className="text-danger">{errors[label]?.message}</span>
          )}
        </div>
      ))}
      <button className="btn btn-primary w-100" type="submit">
        Enviar
      </button>
    </form>
  );
};
