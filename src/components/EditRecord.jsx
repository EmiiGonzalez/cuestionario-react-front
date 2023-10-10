import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/editRecords/editarCampos.css';


export const EditRecord = ({ url }) => {
  const [record, setRecord] = useState({
    cuestn: "",
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
  const { id } = useParams();

  useEffect(() => {
    getRecordById();
  }, []);

  const getRecordById = async () => {
    const res = await axios.get(`${url}rFormWeb/${id}`);
    setRecord(res.data);
  };

  const fieldNames = [
    { label: "cuestn", type: "number" },
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

  return (
    <div className="form-container">
      <form className="form">
        <h1 className="text-center">Editar Registro</h1>
        {fieldNames.map(({ label, type }) => (
          <div className="form-group" key={label}>
            <label className="form-label" htmlFor={label}>
              {label}
            </label>
            <input
              className="form-input"
              id={label}
              type={type}
              value={record[label]}
              onChange={(e) =>
                setRecord({ ...record, [label]: e.target.value })
              }
            />
          </div>
        ))}
        <button className="form-submit-btn" type="submit">Submit</button>

      </form>
    </div>
  );
};
