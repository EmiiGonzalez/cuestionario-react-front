import axios from "axios";
import { useState, useEffect } from "react";
import { CustomThead } from "./CustomThead";
import { CustomTbody } from "./CustomTbody";


export const ShowRecords = ({url}) => {
    const [records, setRecords] = useState([]);

    const getRecords = async () => {
        const res = await axios.get(
            `${url}rFormWeb`
        );
        setRecords(res.data);
    }

    useEffect(() => {
        getRecords();
    }, []);


  return (
    <div className="">
      <div className="">
        <div className="">
            <table className="">
              <CustomThead/>
              <CustomTbody rows={records}/>
            </table>
        </div>
      </div>
    </div>
  );
};
