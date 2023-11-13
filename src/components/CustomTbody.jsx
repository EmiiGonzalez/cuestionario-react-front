import axios from "axios";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

export const CustomTbody = ({rows, getRecords, url}) => {

  const deleteRecord = (id) => {
    try {
      alertify.confirm(
        "¿Confirmar Eliminacion?",
        async () => {
          const response = await axios.delete(`${url}rFormWeb/delete/${id}`);
          alertify.success(`Se Elimino el Registro ${id} correctamente ✔`);
          getRecords();
        },
        () => {
          alertify.error("Se Cancelo la Eliminacion");
        }
      )
      .set("labels", {
        ok: "Si",
        cancel: "No",
      })
      .set("closable", true)
      .set("movable", false)
      .set("title", "");
    } catch (error) {
      alertify.alert("Error ❗", "No se pudo Eliminar el Registro");
    }
    getRecords();
  }

// Luego utiliza las variables desestructuradas directamente en el JSX
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.cuestn}>
          <td scope="row">{row.cuestn}</td>
          <td>{row.edad}</td>
          <td>{row.sexo}</td>
          <td>{row.p1}</td>
          <td>{row.p2}</td>
          <td>{row.p3}</td>
          <td>{row.p4}</td>
          <td>{row.p5}</td>
          <td>{row.p6}</td>
          <td>{row.p7}</td>
          <td>{row.p8}</td>
          <td>{row.p9}</td>
          <td>{row.p10}</td>
          <td>{row.p11}</td>
          <td>{row.p12}</td>
          <td>{row.p13}</td>
          <td>{row.p14}</td>
          <td>{row.p15}</td>
          <td>{row.p16}</td>
          <td><Link to={`/admin/editar/${row.cuestn}`} className="btn btn-primary m-0 p-0 w-100">Editar</Link></td>
          <td><button onClick={() => deleteRecord(row.cuestn)} className="btn btn-danger m-0 p-0 w-100">Eliminar</button></td>
        </tr>
      ))}
    </tbody>
  );
};
