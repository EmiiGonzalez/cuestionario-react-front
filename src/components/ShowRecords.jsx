import axios from "axios";
import { useState, useEffect } from "react";
import { CustomThead } from "./CustomThead";
import { CustomTbody } from "./CustomTbody";
import { Link } from "react-router-dom";

export const ShowRecords = ({ url }) => {
  const [records, setRecords] = useState([]);

  const getRecords = async () => {
    const res = await axios.get(`${url}rFormWeb`);
    setRecords(res.data);
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <>
    <Link to="/rFormWeb/create"><button className="btn btn-success">Agregar</button></Link>
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <CustomThead />
        <CustomTbody rows={records} getRecords={getRecords} url={url} />
      </table>
    </div>

    </>
  );
};
