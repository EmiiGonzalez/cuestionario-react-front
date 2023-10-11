import axios from "axios";
import { useState, useEffect } from "react";
import { CustomThead } from "./CustomThead";
import { CustomTbody } from "./CustomTbody";

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
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <CustomThead />
        <CustomTbody rows={records} getRecords={getRecords} url={url} />
      </table>
    </div>
  );
};
