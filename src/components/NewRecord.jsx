import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import alertify from "alertifyjs";

export const NewRecord = ( {url} ) => {
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
    })

    const navigate = useNavigate()

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
        e.preventDefault();
        try {
            const response = await axios.post(
                `${url}rFormWeb/create`,
                record)
            alertify.success(`Se Agrego el Registro ${response.data.cuestn} ✔`);
            navigate("/")
        }
        catch (error) {
            console.log(error);
        }
    }

  return (
    
    <form
      className="form w-75 px-5 mx-auto mb-5 mt-2 bg-light border rounded"
      onSubmit={saveRecord}
    >
      <h1 className="text-center mb-3 fw-bold">Editar Registro</h1>
      {fieldNames.map(({ label, type }) => (
        <div className="mb-3" key={label}>
          <label className="form-label fw-bold fs-5" htmlFor={label}>
            {label}
          </label>
          <input
            className="form-control fs-5"
            id={label}
            type={type}
            value={record[label]}
            onChange={(e) => setRecord({ ...record, [label]: e.target.value })}
          />
        </div>
      ))}
      <button className="btn btn-primary w-100" type="submit">
        Enviar
      </button>
    </form>
  )
}
